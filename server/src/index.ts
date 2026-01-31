import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import dotenv from 'dotenv';
import { corsMiddleware } from './middleware/cors.js';
import auth from './routes/auth.routes.js';
import schedules from './routes/schedules.routes.js';
import bookings from './routes/bookings.routes.js';
import inventory from './routes/inventory.routes.js';
import finance from './routes/finance.routes.js';

dotenv.config();

const app = new Hono();

// Global middleware
app.use('*', corsMiddleware);

// Health check
app.get('/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API routes
app.route('/api/auth', auth);
app.route('/api/schedules', schedules);
app.route('/api/bookings', bookings);
app.route('/api/inventory', inventory);
app.route('/api/finance', finance);

// 404 handler
app.notFound((c) => {
  return c.json({ error: 'Not found' }, 404);
});

// Error handler
app.onError((err, c) => {
  console.error('Server error:', err);
  return c.json({ error: 'Internal server error' }, 500);
});

const port = parseInt(process.env.PORT || '3001', 10);

console.log(`Starting ColorMeCrazy backend server...`);
console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);

serve({
  fetch: app.fetch,
  port
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`);
});
