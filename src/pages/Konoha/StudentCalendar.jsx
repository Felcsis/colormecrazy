import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCalendar } from '../../context/CalendarContext';
import ScheduleTab from './components/ScheduleTab';
import ModelsTab from './components/ModelsTab';
import CalendarTab from './components/CalendarTab';
import './StudentCalendar.css';

function StudentCalendar() {
  const { currentUser, logout, isAdmin } = useAuth();
  const { modelBookings, students, exportData, importData } = useCalendar();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (file) {
      importData(file);
    }
  };

  // Közelgő modellek (legközelebbi 5)
  const upcomingModels = modelBookings
    .filter(b => new Date(b.date) >= new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 5);

  return (
    <div className="konoha-container">
      <div className="konoha-content">
        {/* Konoha Header */}
        <div className="konoha-header">
          <div>
            <h1>📚 Tanulói Naptár</h1>
            <p className="welcome-text">Üdv, <strong>{currentUser.name}</strong>!</p>
          </div>
          <div className="header-actions">
            <button onClick={() => navigate('/konoha')} className="back-btn">
              ← Dashboard
            </button>
            <button onClick={handleLogout} className="logout-btn">
              Kijelentkezés
            </button>
          </div>
        </div>

        <div className="user-info-card">
          <div className="user-badge" style={{ backgroundColor: currentUser.color || '#667eea' }}>
            {currentUser.name.charAt(0)}
          </div>
          <div className="user-details">
            <h3>{currentUser.name}</h3>
            <p className="user-type">
              {currentUser.type === 'admin' && '👑 Adminisztrátor'}
              {currentUser.type === 'student' && '📚 Tanuló'}
              {currentUser.type === 'employee' && '💼 Alkalmazott'}
            </p>
            {isAdmin() ? (
              <p className="admin-note">✅ Teljes szerkesztési jogosultság</p>
            ) : (
              <p className="readonly-note">👁️ Csak olvasási jogosultság</p>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            📊 Áttekintés
          </button>
          <button
            className={`tab-btn ${activeTab === 'schedule' ? 'active' : ''}`}
            onClick={() => setActiveTab('schedule')}
          >
            📅 Beosztás
          </button>
          <button
            className={`tab-btn ${activeTab === 'models' ? 'active' : ''}`}
            onClick={() => setActiveTab('models')}
          >
            👥 Modellek
          </button>
          <button
            className={`tab-btn ${activeTab === 'calendar' ? 'active' : ''}`}
            onClick={() => setActiveTab('calendar')}
          >
            🗓️ Naptár
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content-area">
          {activeTab === 'overview' && (
            <div className="overview-content">
              <h2>Közelgő modellek</h2>
              {upcomingModels.length > 0 ? (
                <div className="models-list">
                  {upcomingModels.map(model => (
                    <div key={model.id} className="model-card">
                      <div className="model-date">{model.date}</div>
                      <div className="model-info">
                        <strong>{model.modelName}</strong>
                        <p>Tanuló: {model.studentName}</p>
                        <p>Időpont: {model.time} - {model.endTime}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="no-data">Nincs közelgő modell foglalás</p>
              )}

              <h2 style={{ marginTop: '2rem' }}>Tanulók</h2>
              <div className="students-grid">
                {students.map(student => (
                  <div key={student.id} className="student-card">
                    <div className="student-avatar" style={{ backgroundColor: student.color }}>
                      {student.name.charAt(0)}
                    </div>
                    <div className="student-name">{student.name}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'schedule' && <ScheduleTab />}

          {activeTab === 'models' && <ModelsTab />}

          {activeTab === 'calendar' && <CalendarTab />}
        </div>
      </div>
    </div>
  );
}

export default StudentCalendar;
