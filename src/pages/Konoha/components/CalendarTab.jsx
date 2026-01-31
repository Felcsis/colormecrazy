import React, { useState, useRef, useEffect } from 'react';
import { useCalendar } from '../../../context/CalendarContext';
import { useAuth } from '../../../context/AuthContext';
import './CalendarTab.css';

function CalendarTab() {
  const { modelBookings, serviceTypes, settings, updateModelBooking } = useCalendar();
  const { isAdmin } = useAuth();
  const [weekOffset, setWeekOffset] = useState(0);
  const [dayOffset, setDayOffset] = useState(0); // For mobile: 0=Mon-Wed, 1=Tue-Thu, 2=Wed-Fri
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const calendarRef = useRef(null);

  // Detect mobile screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setDayOffset(0); // Reset day offset on desktop
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const weekDays = settings.weekDays;
  const workStartHour = settings.workStartHour;
  const workEndHour = settings.workEndHour;

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

  function getModelsForDate(dateStr) {
    return modelBookings.filter(booking => booking.date === dateStr);
  }

  function getTimePosition(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const totalMinutes = (hours - workStartHour) * 60 + (minutes || 0);
    return (totalMinutes / 60) * 60; // 60px per hour
  }

  function calculateBlockHeight(startTime, endTime) {
    const [startHours, startMinutes] = startTime.split(':').map(Number);
    const [endHours, endMinutes] = endTime.split(':').map(Number);

    const startTotalMinutes = startHours * 60 + (startMinutes || 0);
    const endTotalMinutes = endHours * 60 + (endMinutes || 0);
    const durationMinutes = endTotalMinutes - startTotalMinutes;

    return Math.max((durationMinutes / 60) * 60 - 4, 30);
  }

  function getTimeFromPosition(positionPx) {
    const totalMinutes = Math.round((positionPx / 60) * 60); // 60px = 1 óra
    const hours = Math.floor(totalMinutes / 60) + workStartHour;
    const minutes = totalMinutes % 60;

    // Kerekítés 15 percre
    const roundedMinutes = Math.round(minutes / 15) * 15;
    const finalHours = roundedMinutes === 60 ? hours + 1 : hours;
    const finalMinutes = roundedMinutes === 60 ? 0 : roundedMinutes;

    return `${String(finalHours).padStart(2, '0')}:${String(finalMinutes).padStart(2, '0')}`;
  }

  function getTimeInMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + (minutes || 0);
  }

  const weekStart = getWeekStart(weekOffset);
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 4);

  // Napok létrehozása a héthez
  const allWeekDates = [0, 1, 2, 3, 4].map(dayIndex => {
    const date = new Date(weekStart);
    date.setDate(date.getDate() + dayIndex);
    return {
      dayIndex,
      date,
      dateStr: formatDate(date.getFullYear(), date.getMonth(), date.getDate())
    };
  });

  // Mobilon csak 3 napot mutatunk a dayOffset alapján
  const weekDates = isMobile ? allWeekDates.slice(dayOffset, dayOffset + 3) : allWeekDates;

  const canGoPrevDay = dayOffset > 0;
  const canGoNextDay = dayOffset < 2; // Max 2, mert 0=Mon-Wed, 1=Tue-Thu, 2=Wed-Fri

  const handleWeekChange = (newOffset) => {
    setWeekOffset(newOffset);
    setDayOffset(0); // Reset day view to Monday-Wednesday when changing weeks
  };

  return (
    <div className="calendar-tab">
      <div className="calendar-controls">
        <button onClick={() => handleWeekChange(weekOffset - 1)} className="week-nav-btn">
          ❮ Előző hét
        </button>
        <span className="current-week">
          {formatDateDisplay(weekStart)} - {formatDateDisplay(weekEnd)}
        </span>
        <button onClick={() => handleWeekChange(0)} className="week-nav-btn">
          Ma
        </button>
        <button onClick={() => handleWeekChange(weekOffset + 1)} className="week-nav-btn">
          Következő hét ❯
        </button>
      </div>

      {/* Mobile day navigation */}
      {isMobile && (
        <div className="mobile-day-controls">
          <button
            onClick={() => setDayOffset(Math.max(0, dayOffset - 1))}
            className="day-nav-btn"
            disabled={!canGoPrevDay}
          >
            ❮ Előző napok
          </button>
          <span className="day-info">
            {weekDays[dayOffset]} - {weekDays[Math.min(dayOffset + 2, 4)]}
          </span>
          <button
            onClick={() => setDayOffset(Math.min(2, dayOffset + 1))}
            className="day-nav-btn"
            disabled={!canGoNextDay}
          >
            Következő napok ❯
          </button>
        </div>
      )}

      <div className="week-calendar" ref={calendarRef}>
        {/* Time column */}
        <div className="time-column">
          <div className="day-header"></div>
          {Array.from({ length: workEndHour - workStartHour + 1 }, (_, i) => workStartHour + i).map(hour => (
            <div key={hour} className="time-slot">
              {hour}:00
            </div>
          ))}
        </div>

        {/* Day columns */}
        {weekDates.map(({ dayIndex, date, dateStr }) => {
          const modelsOnDay = getModelsForDate(dateStr);

          return (
            <div key={dayIndex} className="day-column" data-date={dateStr}>
              <div className="day-header">
                {weekDays[dayIndex]}
                <span className="date-small">{date.getMonth() + 1}/{date.getDate()}</span>
              </div>
              <div className="time-grid">
                {/* Hour lines */}
                {Array.from({ length: workEndHour - workStartHour + 1 }, (_, i) => workStartHour + i).map(hour => (
                  <div
                    key={hour}
                    className="time-slot-line"
                    style={{ top: `${(hour - workStartHour) * 60}px` }}
                  />
                ))}

                {/* Model blocks */}
                {modelsOnDay.map(booking => (
                  <DraggableModelBlock
                    key={booking.id}
                    booking={booking}
                    dateStr={dateStr}
                    workStartHour={workStartHour}
                    serviceTypes={serviceTypes}
                    updateModelBooking={updateModelBooking}
                    getTimePosition={getTimePosition}
                    calculateBlockHeight={calculateBlockHeight}
                    getTimeFromPosition={getTimeFromPosition}
                    getTimeInMinutes={getTimeInMinutes}
                    isAdmin={isAdmin}
                    calendarRef={calendarRef}
                    weekDates={allWeekDates}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Draggable Model Block Component
function DraggableModelBlock({
  booking,
  dateStr,
  workStartHour,
  serviceTypes,
  updateModelBooking,
  getTimePosition,
  calculateBlockHeight,
  getTimeFromPosition,
  getTimeInMinutes,
  isAdmin,
  calendarRef,
  weekDates
}) {
  const blockRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const dragInfo = useRef({
    startY: 0,
    startX: 0,
    startTop: 0,
    startLeft: 0,
    resizeDirection: null,
    startHeight: 0,
    originalParent: null,
    currentDayIndex: null
  });

  const top = getTimePosition(booking.time);
  const height = booking.endTime
    ? calculateBlockHeight(booking.time, booking.endTime)
    : 56;

  useEffect(() => {
    if (!isAdmin()) return;

    const block = blockRef.current;
    if (!block) return;

    // Drag handlers
    const onMouseDown = (e) => {
      if (e.target.classList.contains('resize-handle')) return;

      setIsDragging(true);
      dragInfo.current.startY = e.clientY;
      dragInfo.current.startX = e.clientX;
      dragInfo.current.startTop = block.offsetTop;
      dragInfo.current.startLeft = block.offsetLeft;
      dragInfo.current.originalParent = block.parentElement;

      // Keressük meg az aktuális nap indexét
      const currentDate = booking.date;
      const dayIndex = weekDates.findIndex(d => d.dateStr === currentDate);
      dragInfo.current.currentDayIndex = dayIndex;

      e.preventDefault();
    };

    const onMouseMove = (e) => {
      if (isDragging) {
        const deltaY = e.clientY - dragInfo.current.startY;
        const deltaX = e.clientX - dragInfo.current.startX;

        // Vertikális mozgatás (időpont)
        const newTop = Math.max(0, dragInfo.current.startTop + deltaY);
        block.style.top = `${newTop}px`;

        // Horizontális mozgatás (napok között)
        // Számoljuk ki, melyik nap oszlop felett vagyunk
        if (calendarRef.current) {
          const dayColumns = calendarRef.current.querySelectorAll('.day-column');
          const mouseX = e.clientX;

          dayColumns.forEach((column, index) => {
            const rect = column.getBoundingClientRect();
            if (mouseX >= rect.left && mouseX <= rect.right) {
              // Ha új napra mentünk
              if (index !== dragInfo.current.currentDayIndex) {
                dragInfo.current.currentDayIndex = index;

                // Vizuális feedback
                dayColumns.forEach(col => col.classList.remove('drag-over'));
                column.classList.add('drag-over');
              }
            }
          });
        }
      }

      if (isResizing) {
        const deltaY = e.clientY - dragInfo.current.startY;

        if (dragInfo.current.resizeDirection === 'top') {
          const newTop = Math.max(0, dragInfo.current.startTop + deltaY);
          const newHeight = Math.max(30, dragInfo.current.startHeight - deltaY);
          block.style.top = `${newTop}px`;
          block.style.height = `${newHeight}px`;
        } else if (dragInfo.current.resizeDirection === 'bottom') {
          const newHeight = Math.max(30, dragInfo.current.startHeight + deltaY);
          block.style.height = `${newHeight}px`;
        }
      }
    };

    const onMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);

        // Tisztítjuk a vizuális feedback-et
        if (calendarRef.current) {
          const dayColumns = calendarRef.current.querySelectorAll('.day-column');
          dayColumns.forEach(col => col.classList.remove('drag-over'));
        }

        const newTop = parseInt(block.style.top);
        const newTime = getTimeFromPosition(newTop);

        // Időtartam megőrzése
        const oldStart = getTimeInMinutes(booking.time);
        const oldEnd = booking.endTime ? getTimeInMinutes(booking.endTime) : oldStart + 60;
        const duration = oldEnd - oldStart;

        const newStartMinutes = getTimeInMinutes(newTime);
        const newEndMinutes = newStartMinutes + duration;
        const newEndHours = Math.floor(newEndMinutes / 60);
        const newEndMins = newEndMinutes % 60;
        const newEndTime = `${String(newEndHours).padStart(2, '0')}:${String(newEndMins).padStart(2, '0')}`;

        // Új dátum meghatározása
        const newDayIndex = dragInfo.current.currentDayIndex;
        const newDate = weekDates[newDayIndex]?.dateStr || booking.date;

        updateModelBooking(booking.id, {
          date: newDate,
          time: newTime,
          endTime: newEndTime
        });
      }

      if (isResizing) {
        setIsResizing(false);

        const newTop = parseInt(block.style.top);
        const newHeight = parseInt(block.style.height);

        const newStartTime = getTimeFromPosition(newTop);
        const newEndTime = getTimeFromPosition(newTop + newHeight);

        updateModelBooking(booking.id, {
          time: newStartTime,
          endTime: newEndTime
        });
      }
    };

    // Resize handlers
    const topHandle = block.querySelector('.resize-handle-top');
    const bottomHandle = block.querySelector('.resize-handle-bottom');

    const onResizeStart = (e, direction) => {
      setIsResizing(true);
      dragInfo.current.resizeDirection = direction;
      dragInfo.current.startY = e.clientY;
      dragInfo.current.startTop = block.offsetTop;
      dragInfo.current.startHeight = parseInt(getComputedStyle(block).height);
      e.preventDefault();
      e.stopPropagation();
    };

    block.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    if (topHandle) {
      topHandle.addEventListener('mousedown', (e) => onResizeStart(e, 'top'));
    }
    if (bottomHandle) {
      bottomHandle.addEventListener('mousedown', (e) => onResizeStart(e, 'bottom'));
    }

    return () => {
      block.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging, isResizing, booking, updateModelBooking, getTimeFromPosition, getTimeInMinutes, isAdmin, calendarRef, weekDates]);

  const timeDisplay = booking.endTime ? `${booking.time} - ${booking.endTime}` : booking.time;

  return (
    <div
      ref={blockRef}
      className={`model-block student-${booking.studentId} ${isDragging ? 'dragging' : ''} ${isResizing ? 'resizing' : ''}`}
      style={{
        top: `${top}px`,
        height: `${height}px`,
        backgroundColor: serviceTypes[booking.service]?.color || '#667eea',
        cursor: isAdmin() ? 'grab' : 'default'
      }}
    >
      {isAdmin() && <div className="resize-handle resize-handle-top"></div>}
      <div className="model-block-content">
        <div className="model-block-time">{timeDisplay}</div>
        <div className="model-block-student">{booking.studentName}</div>
        <div className="model-block-model">{booking.modelName}</div>
        <div className="model-block-service">
          {serviceTypes[booking.service]?.label || booking.service}
        </div>
      </div>
      {isAdmin() && <div className="resize-handle resize-handle-bottom"></div>}
    </div>
  );
}

export default CalendarTab;
