import { Hono } from 'hono';
import { query } from '../config/database.js';
import { authMiddleware } from '../middleware/auth.js';

const schedules = new Hono();

// All routes require authentication
schedules.use('*', authMiddleware);

// GET /api/schedules?date=YYYY-MM-DD
schedules.get('/', async (c) => {
  try {
    const date = c.req.query('date');

    let result;
    if (date) {
      // Get schedules for specific date
      result = await query(
        `SELECT s.id, s.date, s.shift, s.user_id, u.name as user_name, u.color as user_color
         FROM schedules s
         JOIN users u ON s.user_id = u.id
         WHERE s.date = $1
         ORDER BY s.shift, u.name`,
        [date]
      );
    } else {
      // Get all schedules
      result = await query(
        `SELECT s.id, s.date, s.shift, s.user_id, u.name as user_name, u.color as user_color
         FROM schedules s
         JOIN users u ON s.user_id = u.id
         ORDER BY s.date DESC, s.shift, u.name
         LIMIT 100`
      );
    }

    // Transform to grouped format
    const grouped: Record<string, any[]> = {};
    for (const row of result.rows) {
      const key = `${row.date}-${row.shift}`;
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push({
        userId: row.user_id,
        userName: row.user_name,
        userColor: row.user_color
      });
    }

    return c.json({ schedules: grouped });
  } catch (error) {
    console.error('Get schedules error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// POST /api/schedules
// Body: { date, shift, userId, action: 'add' | 'remove' }
schedules.post('/', async (c) => {
  try {
    const { date, shift, userId, action } = await c.req.json();

    if (!date || !shift || !userId || !action) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    if (!['Délelőtt', 'Délután'].includes(shift)) {
      return c.json({ error: 'Invalid shift' }, 400);
    }

    if (action === 'add') {
      await query(
        `INSERT INTO schedules (date, shift, user_id)
         VALUES ($1, $2, $3)
         ON CONFLICT (date, shift, user_id) DO NOTHING`,
        [date, shift, userId]
      );
    } else if (action === 'remove') {
      await query(
        'DELETE FROM schedules WHERE date = $1 AND shift = $2 AND user_id = $3',
        [date, shift, userId]
      );
    } else {
      return c.json({ error: 'Invalid action' }, 400);
    }

    return c.json({ success: true });
  } catch (error) {
    console.error('Save schedule error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

export default schedules;
