import React, { useState, useEffect } from 'react';
import { useCalendar } from '../../../context/CalendarContext';
import { useAuth } from '../../../context/AuthContext';
import './ScheduleTab.css';

function ScheduleTab() {
  const { schedules, students, saveSchedule } = useCalendar();
  const { isAdmin } = useAuth();
  const [weekOffset, setWeekOffset] = useState(0);

  const weekDays = ['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek'];
  const shifts = ['Délelőtt', 'Délután'];

  function getWeekStart(offset = 0) {
    const today = new Date();
    const day = today.getDay();
    const diff = today.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(today.setDate(diff));
    monday.setDate(monday.getDate() + (offset * 7));
    monday.setHours(0, 0, 0, 0);
    return monday;
  }

  function formatDate(year, month, day) {
    const monthStr = String(month + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');
    return `${year}-${monthStr}-${dayStr}`;
  }

  function formatDateDisplay(date) {
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}.`;
  }

  function isStudentScheduled(date, shift, studentId) {
    const key = `${date}-${shift}`;
    const result = schedules[key];
    return Array.isArray(result) ? result.includes(studentId) : false;
  }

  const weekStart = getWeekStart(weekOffset);
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 4);

  return (
    <div className="schedule-tab">
      <div className="schedule-controls">
        <button
          onClick={() => setWeekOffset(weekOffset - 1)}
          className="week-nav-btn"
        >
          ❮ Előző
        </button>
        <span className="current-week">
          {formatDateDisplay(weekStart)} - {formatDateDisplay(weekEnd)}
        </span>
        <button
          onClick={() => setWeekOffset(weekOffset + 1)}
          className="week-nav-btn"
        >
          Következő ❯
        </button>
      </div>

      <div className="schedule-grid">
        {/* Header corner */}
        <div className="schedule-cell schedule-header">Műszak</div>

        {/* Day headers */}
        {weekDays.map(day => (
          <div key={day} className="schedule-cell schedule-header">
            {day}
          </div>
        ))}

        {/* Shifts and cells */}
        {shifts.map(shift => (
          <React.Fragment key={shift}>
            <div className="schedule-cell schedule-header">
              <span className="schedule-time-label">{shift}</span>
            </div>

            {[0, 1, 2, 3, 4].map(dayIndex => {
              const date = new Date(weekStart);
              date.setDate(date.getDate() + dayIndex);
              const dateStr = formatDate(date.getFullYear(), date.getMonth(), date.getDate());

              return (
                <div key={`${shift}-${dayIndex}`} className="schedule-cell">
                  {isAdmin() ? (
                    // Admin: minden tanuló checkboxszal
                    students.map(student => (
                      <label key={student.id} className="student-checkbox-label">
                        <input
                          type="checkbox"
                          className="student-checkbox"
                          checked={isStudentScheduled(dateStr, shift, student.id)}
                          onChange={(e) => saveSchedule(dateStr, shift, student.id, e.target.checked)}
                        />
                        <span className={`student-label ${student.id}`}>
                          {student.name}
                        </span>
                      </label>
                    ))
                  ) : (
                    // Tanuló: csak beosztottak nevei
                    students
                      .filter(student => isStudentScheduled(dateStr, shift, student.id))
                      .map(student => (
                        <div key={student.id} className="scheduled-student">
                          <span className={`student-label ${student.id}`}>
                            {student.name}
                          </span>
                        </div>
                      ))
                  )}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default ScheduleTab;
