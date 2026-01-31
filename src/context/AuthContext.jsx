import React, { createContext, useState, useContext, useEffect } from 'react';
import { api } from '../services/api';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in on mount
  useEffect(() => {
    async function checkAuth() {
      try {
        const { user } = await api.getCurrentUser();
        setCurrentUser(user);
      } catch (error) {
        // Not logged in or session expired
        setCurrentUser(null);
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, []);

  // Login
  async function login(username, password) {
    try {
      const { user } = await api.login(username, password);
      setCurrentUser(user);
      return { success: true, user };
    } catch (error) {
      return { success: false, error: error.message || 'Hibás felhasználónév vagy jelszó!' };
    }
  }

  // Logout
  async function logout() {
    try {
      await api.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setCurrentUser(null);
    }
  }

  // Check if admin
  function isAdmin() {
    return currentUser?.type === 'admin';
  }

  const value = {
    currentUser,
    login,
    logout,
    isAdmin,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
