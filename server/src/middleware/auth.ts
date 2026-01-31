import { Context, Next } from 'hono';
import { getCookie } from 'hono/cookie';
import { validateSession, User } from '../services/auth.service.js';

export interface AuthContext {
  user: User;
}

export async function authMiddleware(c: Context, next: Next) {
  // Get session token from cookie
  const sessionToken = getCookie(c, 'session_token');

  if (!sessionToken) {
    return c.json({ error: 'Unauthorized' }, 401);
  }

  // Validate session
  const user = await validateSession(sessionToken);

  if (!user) {
    return c.json({ error: 'Invalid or expired session' }, 401);
  }

  // Attach user to context
  c.set('user', user);

  await next();
}

export async function adminOnlyMiddleware(c: Context, next: Next) {
  const user = c.get('user') as User;

  if (user.type !== 'admin') {
    return c.json({ error: 'Forbidden: Admin access required' }, 403);
  }

  await next();
}
