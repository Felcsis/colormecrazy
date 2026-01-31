import { Context, Next } from 'hono';

const ALLOWED_ORIGINS = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://colormecrazy.hu',
  'https://www.colormecrazy.hu'
];

export async function corsMiddleware(c: Context, next: Next) {
  const origin = c.req.header('origin');

  // Allow the origin if it's in the whitelist
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    c.header('Access-Control-Allow-Origin', origin);
  }

  c.header('Access-Control-Allow-Credentials', 'true');
  c.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  c.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight
  if (c.req.method === 'OPTIONS') {
    return c.text('', 204);
  }

  await next();
}
