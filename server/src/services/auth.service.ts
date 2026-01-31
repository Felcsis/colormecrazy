import { query } from '../config/database.js';
import { comparePassword, generateSessionToken } from '../utils/crypto.js';

const SESSION_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days in ms

export interface User {
  id: number;
  name: string;
  type: 'admin' | 'student';
  color: string;
}

export interface Session {
  id: number;
  userId: number;
  sessionToken: string;
  expiresAt: Date;
}

export async function login(username: string, password: string): Promise<{ user: User; sessionToken: string } | null> {
  // Find user by name
  const userResult = await query(
    'SELECT id, name, password_hash, type, color FROM users WHERE name = $1',
    [username]
  );

  if (userResult.rows.length === 0) {
    return null;
  }

  const userRow = userResult.rows[0];

  // Verify password
  const isValid = await comparePassword(password, userRow.password_hash);
  if (!isValid) {
    return null;
  }

  // Create session
  const sessionToken = generateSessionToken();
  const expiresAt = new Date(Date.now() + SESSION_DURATION);

  await query(
    `INSERT INTO sessions (user_id, session_token, expires_at)
     VALUES ($1, $2, $3)`,
    [userRow.id, sessionToken, expiresAt]
  );

  const user: User = {
    id: userRow.id,
    name: userRow.name,
    type: userRow.type,
    color: userRow.color
  };

  return { user, sessionToken };
}

export async function logout(sessionToken: string): Promise<boolean> {
  const result = await query(
    'DELETE FROM sessions WHERE session_token = $1',
    [sessionToken]
  );

  return result.rowCount ? result.rowCount > 0 : false;
}

export async function validateSession(sessionToken: string): Promise<User | null> {
  // Get session and user
  const result = await query(
    `SELECT s.id, s.user_id, s.expires_at, u.name, u.type, u.color
     FROM sessions s
     JOIN users u ON s.user_id = u.id
     WHERE s.session_token = $1`,
    [sessionToken]
  );

  if (result.rows.length === 0) {
    return null;
  }

  const row = result.rows[0];

  // Check if session expired
  if (new Date(row.expires_at) < new Date()) {
    await query('DELETE FROM sessions WHERE id = $1', [row.id]);
    return null;
  }

  // Refresh session expiration
  const newExpiresAt = new Date(Date.now() + SESSION_DURATION);
  await query(
    'UPDATE sessions SET expires_at = $1, updated_at = CURRENT_TIMESTAMP WHERE session_token = $2',
    [newExpiresAt, sessionToken]
  );

  return {
    id: row.user_id,
    name: row.name,
    type: row.type,
    color: row.color
  };
}

export async function getUserById(userId: number): Promise<User | null> {
  const result = await query(
    'SELECT id, name, type, color FROM users WHERE id = $1',
    [userId]
  );

  if (result.rows.length === 0) {
    return null;
  }

  const row = result.rows[0];
  return {
    id: row.id,
    name: row.name,
    type: row.type,
    color: row.color
  };
}
