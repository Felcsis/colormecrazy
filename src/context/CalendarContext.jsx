import React, { createContext, useState, useContext, useEffect } from 'react';
import database from '../data/database.json';

const CalendarContext = createContext();

export function useCalendar() {
  return useContext(CalendarContext);
}

export function CalendarProvider({ children }) {
  const [schedules, setSchedules] = useState({});
  const [modelBookings, setModelBookings] = useState([]);
  const [googleCalendarUrl, setGoogleCalendarUrl] = useState('');
  const [settings, setSettings] = useState(database.settings);

  // Inicializálás localStorage-ból vagy database.json-ból
  useEffect(() => {
    const savedSchedules = localStorage.getItem('schedules');
    const savedModels = localStorage.getItem('modelBookings');
    const savedGoogleUrl = localStorage.getItem('googleCalendarUrl');

    if (savedSchedules) {
      setSchedules(JSON.parse(savedSchedules));
    } else {
      setSchedules(database.schedules);
    }

    if (savedModels) {
      setModelBookings(JSON.parse(savedModels));
    } else {
      setModelBookings(database.modelBookings);
    }

    if (savedGoogleUrl) {
      setGoogleCalendarUrl(savedGoogleUrl);
    }
  }, []);

  // Schedules mentése
  function saveSchedule(date, shift, studentId, isChecked) {
    const key = `${date}-${shift}`;
    const newSchedules = { ...schedules };

    if (!newSchedules[key]) newSchedules[key] = [];

    if (isChecked) {
      if (!newSchedules[key].includes(studentId)) {
        newSchedules[key].push(studentId);
      }
    } else {
      newSchedules[key] = newSchedules[key].filter(id => id !== studentId);
    }

    setSchedules(newSchedules);
    localStorage.setItem('schedules', JSON.stringify(newSchedules));
  }

  // Modell foglalás hozzáadása
  function addModelBooking(booking) {
    const newBooking = {
      ...booking,
      id: Date.now()
    };
    const updatedBookings = [...modelBookings, newBooking];
    setModelBookings(updatedBookings);
    localStorage.setItem('modelBookings', JSON.stringify(updatedBookings));
    return newBooking;
  }

  // Modell foglalás módosítása
  function updateModelBooking(bookingId, updatedData) {
    const updatedBookings = modelBookings.map(b =>
      b.id === bookingId ? { ...b, ...updatedData } : b
    );
    setModelBookings(updatedBookings);
    localStorage.setItem('modelBookings', JSON.stringify(updatedBookings));
  }

  // Modell foglalás törlése
  function deleteModelBooking(bookingId) {
    const updatedBookings = modelBookings.filter(b => b.id !== bookingId);
    setModelBookings(updatedBookings);
    localStorage.setItem('modelBookings', JSON.stringify(updatedBookings));
  }

  // Google Calendar URL mentése
  function saveGoogleCalendarUrl(url) {
    setGoogleCalendarUrl(url);
    localStorage.setItem('googleCalendarUrl', url);
  }

  // Export adatok JSON-ba
  function exportData() {
    const data = {
      schedules,
      modelBookings,
      googleCalendarUrl,
      exportedAt: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)],
      { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tanuloi-naptar-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  // Import adatok JSON-ból
  function importData(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (data.schedules) {
          setSchedules(data.schedules);
          localStorage.setItem('schedules', JSON.stringify(data.schedules));
        }
        if (data.modelBookings) {
          setModelBookings(data.modelBookings);
          localStorage.setItem('modelBookings', JSON.stringify(data.modelBookings));
        }
        if (data.googleCalendarUrl) {
          setGoogleCalendarUrl(data.googleCalendarUrl);
          localStorage.setItem('googleCalendarUrl', data.googleCalendarUrl);
        }
        alert('Sikeres importálás!');
      } catch (error) {
        alert('Hiba az importálás során!');
      }
    };
    reader.readAsText(file);
  }

  const value = {
    schedules,
    modelBookings,
    googleCalendarUrl,
    settings,
    students: database.users.filter(u => u.type === 'student'),
    allUsers: database.users,
    serviceTypes: database.serviceTypes,
    saveSchedule,
    addModelBooking,
    updateModelBooking,
    deleteModelBooking,
    saveGoogleCalendarUrl,
    exportData,
    importData
  };

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
}
