import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  const location = useLocation();

  if (!currentUser) {
    // Nincs bejelentkezve -> átirányítás a login oldalra
    // Az aktuális helyet elmentjük, hogy bejelentkezés után vissza tudjunk irányítani
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Be van jelentkezve -> megjelenítjük az oldalt
  return children;
}

export default ProtectedRoute;
