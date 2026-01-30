import React, { createContext, useState, useContext, useEffect } from 'react';
import database from '../data/database.json';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Oldal betöltésekor ellenőrizzük, van-e mentett bejelentkezés
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // Bejelentkezés
  function login(username, password) {
    const user = database.users.find(
      u => u.id === username && u.password === password
    );

    if (user) {
      const userWithoutPassword = {
        id: user.id,
        name: user.name,
        type: user.type,
        color: user.color
      };
      setCurrentUser(userWithoutPassword);
      localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
      return { success: true, user: userWithoutPassword };
    }

    return { success: false, error: 'Hibás felhasználónév vagy jelszó!' };
  }

  // Kijelentkezés
  function logout() {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  }

  // Admin jogosultság ellenőrzése
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
