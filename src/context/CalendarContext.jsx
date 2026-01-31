import React, { createContext, useState, useContext, useEffect } from 'react';
import { api } from '../services/api';
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
  const [students, setStudents] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [serviceTypes, setServiceTypes] = useState(database.serviceTypes);
  const [loading, setLoading] = useState(true);

  // Load initial data from API
  useEffect(() => {
    async function loadData() {
      try {
        // Load schedules
        const { schedules: schedulesData } = await api.getSchedules();
        setSchedules(schedulesData);

        // Load bookings
        const { bookings } = await api.getBookings();
        setModelBookings(bookings);

        setLoading(false);
      } catch (error) {
        console.error('Failed to load calendar data:', error);
        // Fall back to empty state
        setSchedules({});
        setModelBookings([]);
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // Save schedule
  async function saveSchedule(date, shift, userId, isChecked) {
    try {
      const action = isChecked ? 'add' : 'remove';
      await api.saveSchedule(date, shift, userId, action);

      // Update local state
      const key = `${date}-${shift}`;
      const newSchedules = { ...schedules };

      if (!newSchedules[key]) newSchedules[key] = [];

      if (isChecked) {
        const user = allUsers.find(u => u.id === userId);
        if (user && !newSchedules[key].find(u => u.userId === userId)) {
          newSchedules[key].push({
            userId: user.id,
            userName: user.name,
            userColor: user.color
          });
        }
      } else {
        newSchedules[key] = newSchedules[key].filter(u => u.userId !== userId);
      }

      setSchedules(newSchedules);
    } catch (error) {
      console.error('Failed to save schedule:', error);
      throw error;
    }
  }

  // Add model booking
  async function addModelBooking(booking) {
    try {
      const { booking: newBooking } = await api.createBooking(booking);
      const updatedBookings = [...modelBookings, newBooking];
      setModelBookings(updatedBookings);
      return newBooking;
    } catch (error) {
      console.error('Failed to add booking:', error);
      throw error;
    }
  }

  // Update model booking
  async function updateModelBooking(bookingId, updatedData) {
    try {
      await api.updateBooking(bookingId, updatedData);
      const updatedBookings = modelBookings.map(b =>
        b.id === bookingId ? { ...b, ...updatedData } : b
      );
      setModelBookings(updatedBookings);
    } catch (error) {
      console.error('Failed to update booking:', error);
      throw error;
    }
  }

  // Delete model booking
  async function deleteModelBooking(bookingId) {
    try {
      await api.deleteBooking(bookingId);
      const updatedBookings = modelBookings.filter(b => b.id !== bookingId);
      setModelBookings(updatedBookings);
    } catch (error) {
      console.error('Failed to delete booking:', error);
      throw error;
    }
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
    serviceTypes,
    loading,
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
