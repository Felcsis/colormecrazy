import { Hono } from 'hono';
import { query } from '../config/database.js';
import { authMiddleware } from '../middleware/auth.js';
import { User } from '../services/auth.service.js';

const finance = new Hono();

// All routes require authentication
finance.use('*', authMiddleware);

// Helper function to calculate date range
function getDateRange(period: string): { startDate: Date; endDate: Date } {
  const now = new Date();
  const endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
  let startDate: Date;

  switch (period) {
    case 'day':
      startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      break;
    case 'week':
      startDate = new Date(endDate);
      startDate.setDate(startDate.getDate() - 7);
      break;
    case 'month':
      startDate = new Date(endDate);
      startDate.setMonth(startDate.getMonth() - 1);
      break;
    default: // 'all'
      startDate = new Date(2020, 0, 1);
      break;
  }

  return { startDate, endDate };
}

// GET /api/finance/incomes?period=month
finance.get('/incomes', async (c) => {
  try {
    const period = c.req.query('period') || 'month';
    const { startDate, endDate } = getDateRange(period);

    const result = await query(
      `SELECT i.id, i.date, i.amount, i.type, i.payment_method, i.created_at,
              u.name as created_by_name
       FROM incomes i
       JOIN users u ON i.created_by = u.id
       WHERE i.date >= $1 AND i.date <= $2
       ORDER BY i.date DESC, i.created_at DESC`,
      [startDate.toISOString().split('T')[0], endDate.toISOString().split('T')[0]]
    );

    const incomes = result.rows.map(row => ({
      id: row.id,
      date: row.date,
      amount: parseFloat(row.amount),
      type: row.type,
      paymentMethod: row.payment_method,
      createdBy: row.created_by_name,
      createdAt: row.created_at
    }));

    return c.json({ incomes });
  } catch (error) {
    console.error('Get incomes error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// POST /api/finance/incomes
// Body: { date, amount, type, paymentMethod }
finance.post('/incomes', async (c) => {
  try {
    const user = c.get('user') as User;
    const { date, amount, type, paymentMethod } = await c.req.json();

    if (!date || !amount || !type || !paymentMethod) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    if (typeof amount !== 'number' || amount <= 0) {
      return c.json({ error: 'Invalid amount' }, 400);
    }

    const result = await query(
      `INSERT INTO incomes (date, amount, type, payment_method, created_by)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [date, amount, type, paymentMethod, user.id]
    );

    return c.json({
      success: true,
      income: {
        id: result.rows[0].id,
        date: result.rows[0].date,
        amount: parseFloat(result.rows[0].amount),
        type: result.rows[0].type,
        paymentMethod: result.rows[0].payment_method
      }
    });
  } catch (error) {
    console.error('Create income error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// DELETE /api/finance/incomes/:id
finance.delete('/incomes/:id', async (c) => {
  try {
    const id = c.req.param('id');

    const result = await query(
      'DELETE FROM incomes WHERE id = $1',
      [id]
    );

    if (result.rowCount === 0) {
      return c.json({ error: 'Income not found' }, 404);
    }

    return c.json({ success: true });
  } catch (error) {
    console.error('Delete income error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// GET /api/finance/expenses?period=month
finance.get('/expenses', async (c) => {
  try {
    const period = c.req.query('period') || 'month';
    const { startDate, endDate } = getDateRange(period);

    const result = await query(
      `SELECT e.id, e.date, e.amount, e.category, e.created_at,
              u.name as created_by_name
       FROM expenses e
       JOIN users u ON e.created_by = u.id
       WHERE e.date >= $1 AND e.date <= $2
       ORDER BY e.date DESC, e.created_at DESC`,
      [startDate.toISOString().split('T')[0], endDate.toISOString().split('T')[0]]
    );

    const expenses = result.rows.map(row => ({
      id: row.id,
      date: row.date,
      amount: parseFloat(row.amount),
      category: row.category,
      createdBy: row.created_by_name,
      createdAt: row.created_at
    }));

    return c.json({ expenses });
  } catch (error) {
    console.error('Get expenses error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// POST /api/finance/expenses
// Body: { date, amount, category }
finance.post('/expenses', async (c) => {
  try {
    const user = c.get('user') as User;
    const { date, amount, category } = await c.req.json();

    if (!date || !amount || !category) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    if (typeof amount !== 'number' || amount <= 0) {
      return c.json({ error: 'Invalid amount' }, 400);
    }

    const result = await query(
      `INSERT INTO expenses (date, amount, category, created_by)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [date, amount, category, user.id]
    );

    return c.json({
      success: true,
      expense: {
        id: result.rows[0].id,
        date: result.rows[0].date,
        amount: parseFloat(result.rows[0].amount),
        category: result.rows[0].category
      }
    });
  } catch (error) {
    console.error('Create expense error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// DELETE /api/finance/expenses/:id
finance.delete('/expenses/:id', async (c) => {
  try {
    const id = c.req.param('id');

    const result = await query(
      'DELETE FROM expenses WHERE id = $1',
      [id]
    );

    if (result.rowCount === 0) {
      return c.json({ error: 'Expense not found' }, 404);
    }

    return c.json({ success: true });
  } catch (error) {
    console.error('Delete expense error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

export default finance;
