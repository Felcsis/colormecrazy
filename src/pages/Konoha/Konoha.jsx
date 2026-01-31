import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faBoxes,
  faMoneyBillWave,
  faUserCog,
  faChartLine,
  faCog
} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../context/AuthContext';
import './Konoha.css';

// Admin modules configuration
const adminModules = [
  {
    id: 'student-calendar',
    path: '/konoha/tanuloi-naptar',
    icon: faCalendar,
    color: '#8B7EB8'
  },
  {
    id: 'inventory',
    path: '/konoha/keszlet',
    icon: faBoxes,
    color: '#C098E8',
    comingSoon: true
  },
  {
    id: 'finance',
    path: '/konoha/penzugy',
    icon: faMoneyBillWave,
    color: '#F4B8D8',
    comingSoon: true
  },
  {
    id: 'employees',
    path: '/konoha/munkatarsak',
    icon: faUserCog,
    color: '#7BA3C4',
    comingSoon: true
  },
  {
    id: 'analytics',
    path: '/konoha/statisztika',
    icon: faChartLine,
    color: '#A8C8E8',
    comingSoon: true
  },
  {
    id: 'settings',
    path: '/konoha/beallitasok',
    icon: faCog,
    color: '#9CA3AF',
    comingSoon: true
  }
];

function Konoha() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="konoha-dashboard">
      <div className="dashboard-container">
        {/* Header */}
        <div className="dashboard-header">
          <div>
            <h1>🔮 Admin Dashboard</h1>
            <p className="welcome-text">Üdv, <strong>{currentUser.name}</strong>!</p>
          </div>
          <div className="header-actions">
            <button onClick={handleLogout} className="logout-btn">
              Kijelentkezés
            </button>
          </div>
        </div>

        {/* User Info */}
        <div className="user-info-card">
          <div className="user-badge" style={{ backgroundColor: currentUser.color || '#667eea' }}>
            {currentUser.name.charAt(0)}
          </div>
          <div className="user-details">
            <h3>{currentUser.name}</h3>
            <p className="user-type">
              {currentUser.type === 'admin' && '👑 Adminisztrátor'}
              {currentUser.type === 'student' && '📚 Tanuló'}
            </p>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="modules-grid">
          {adminModules.map((module) => (
            module.comingSoon ? (
              <div
                key={module.id}
                className="module-card coming-soon"
                data-module={module.id}
                style={{ '--module-color': module.color }}
              >
                <div className="arcana-number">
                  <FontAwesomeIcon icon={module.icon} />
                </div>
                <div className="module-info">
                  <h3>{getModuleName(module.id)}</h3>
                  <span className="module-status">Hamarosan</span>
                </div>
              </div>
            ) : (
              <Link
                key={module.id}
                to={module.path}
                className="module-card"
                data-module={module.id}
                style={{ '--module-color': module.color }}
              >
                <div className="arcana-number">
                  <FontAwesomeIcon icon={module.icon} />
                </div>
                <div className="module-info">
                  <h3>{getModuleName(module.id)}</h3>
                  <span className="module-description">{getModuleDescription(module.id)}</span>
                </div>
              </Link>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

// Helper functions for module names and descriptions
function getModuleName(id) {
  const names = {
    'student-calendar': 'Tanulói Naptár',
    'inventory': 'Készletkezelés',
    'finance': 'Pénzügy',
    'employees': 'Munkatársak',
    'analytics': 'Statisztika',
    'settings': 'Beállítások'
  };
  return names[id] || id;
}

function getModuleDescription(id) {
  const descriptions = {
    'student-calendar': 'Beosztások, modellek, naptár',
    'inventory': 'Termékek, készlet, beszerzés',
    'finance': 'Bevételek, kiadások, számla',
    'employees': 'Munkatársak kezelése',
    'analytics': 'Statisztikák, jelentések',
    'settings': 'Rendszer beállítások'
  };
  return descriptions[id] || '';
}

export default Konoha;
