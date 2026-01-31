import { Hono } from 'hono';
import { setCookie, deleteCookie, getCookie } from 'hono/cookie';
import { login, logout, getUserById } from '../services/auth.service.js';
import { authMiddleware } from '../middleware/auth.ts';

const auth = new Hono();

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'Lax' as const,
  maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
  path: '/'
};

// POST /api/auth/login
auth.post('/login', async (c) => {
  try {
    const { username, password } = await c.req.json();

    if (!username || !password) {
      return c.json({ error: 'Username and password required' }, 400);
    }

    const result = await login(username, password);

    if (!result) {
      return c.json({ error: 'Invalid credentials' }, 401);
    }

    // Set session cookie
    setCookie(c, 'session_token', result.sessionToken, COOKIE_OPTIONS);

    return c.json({
      success: true,
      user: result.user
    });
  } catch (error) {
    console.error('Login error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// POST /api/auth/logout
auth.post('/logout', authMiddleware, async (c) => {
  try {
    const sessionToken = getCookie(c, 'session_token');

    if (sessionToken) {
      await logout(sessionToken);
    }

    deleteCookie(c, 'session_token', { path: '/' });

    return c.json({ success: true });
  } catch (error) {
    console.error('Logout error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// GET /api/auth/me
auth.get('/me', authMiddleware, async (c) => {
  try {
    const user = c.get('user');
    return c.json({ user });
  } catch (error) {
    console.error('Get current user error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

export default auth;
