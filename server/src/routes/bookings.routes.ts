import { Hono } from 'hono';
import { query } from '../config/database.js';
import { authMiddleware } from '../middleware/auth.js';

const bookings = new Hono();

// All routes require authentication
bookings.use('*', authMiddleware);

// GET /api/bookings?studentId=X&date=Y
bookings.get('/', async (c) => {
  try {
    const studentId = c.req.query('studentId');
    const date = c.req.query('date');

    let sql = `
      SELECT b.id, b.student_id, b.model_name, b.date, b.time, b.service, b.notes,
             u.name as student_name, u.color as student_color
      FROM model_bookings b
      JOIN users u ON b.student_id = u.id
      WHERE 1=1
    `;
    const params: any[] = [];
    let paramCount = 1;

    if (studentId) {
      sql += ` AND b.student_id = $${paramCount}`;
      params.push(parseInt(studentId));
      paramCount++;
    }

    if (date) {
      sql += ` AND b.date = $${paramCount}`;
      params.push(date);
      paramCount++;
    }

    sql += ' ORDER BY b.date DESC, b.time DESC LIMIT 100';

    const result = await query(sql, params);

    const bookings = result.rows.map(row => ({
      id: row.id,
      studentId: row.student_id,
      studentName: row.student_name,
      studentColor: row.student_color,
      modelName: row.model_name,
      date: row.date,
      time: row.time,
      service: row.service,
      notes: row.notes
    }));

    return c.json({ bookings });
  } catch (error) {
    console.error('Get bookings error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// POST /api/bookings
// Body: { studentId, modelName, date, time, service, notes? }
bookings.post('/', async (c) => {
  try {
    const { studentId, modelName, date, time, service, notes } = await c.req.json();

    if (!studentId || !modelName || !date || !time || !service) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    // Generate ID as timestamp
    const id = Date.now().toString();

    const result = await query(
      `INSERT INTO model_bookings (id, student_id, model_name, date, time, service, notes)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [id, studentId, modelName, date, time, service, notes || null]
    );

    return c.json({
      success: true,
      booking: {
        id: result.rows[0].id,
        studentId: result.rows[0].student_id,
        modelName: result.rows[0].model_name,
        date: result.rows[0].date,
        time: result.rows[0].time,
        service: result.rows[0].service,
        notes: result.rows[0].notes
      }
    });
  } catch (error) {
    console.error('Create booking error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// PUT /api/bookings/:id
// Body: { modelName?, date?, time?, service?, notes? }
bookings.put('/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const updates = await c.req.json();

    const allowedFields = ['modelName', 'date', 'time', 'service', 'notes'];
    const setClauses: string[] = [];
    const params: any[] = [];
    let paramCount = 1;

    for (const [key, value] of Object.entries(updates)) {
      if (allowedFields.includes(key)) {
        const dbField = key.replace(/([A-Z])/g, '_$1').toLowerCase();
        setClauses.push(`${dbField} = $${paramCount}`);
        params.push(value);
        paramCount++;
      }
    }

    if (setClauses.length === 0) {
      return c.json({ error: 'No valid fields to update' }, 400);
    }

    params.push(id);

    const sql = `
      UPDATE model_bookings
      SET ${setClauses.join(', ')}, updated_at = CURRENT_TIMESTAMP
      WHERE id = $${paramCount}
      RETURNING *
    `;

    const result = await query(sql, params);

    if (result.rowCount === 0) {
      return c.json({ error: 'Booking not found' }, 404);
    }

    return c.json({ success: true, booking: result.rows[0] });
  } catch (error) {
    console.error('Update booking error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// DELETE /api/bookings/:id
bookings.delete('/:id', async (c) => {
  try {
    const id = c.req.param('id');

    const result = await query(
      'DELETE FROM model_bookings WHERE id = $1',
      [id]
    );

    if (result.rowCount === 0) {
      return c.json({ error: 'Booking not found' }, 404);
    }

    return c.json({ success: true });
  } catch (error) {
    console.error('Delete booking error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

export default bookings;
