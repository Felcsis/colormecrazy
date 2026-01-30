import React, { useState } from 'react';
import { useCalendar } from '../../../context/CalendarContext';
import { useAuth } from '../../../context/AuthContext';
import './ModelsTab.css';

function ModelsTab() {
  const { modelBookings, students, serviceTypes, addModelBooking, updateModelBooking, deleteModelBooking } = useCalendar();
  const { isAdmin } = useAuth();
  const [filter, setFilter] = useState('all');
  const [editingModel, setEditingModel] = useState(null);

  const [formData, setFormData] = useState({
    studentId: '',
    modelName: '',
    date: new Date().toISOString().split('T')[0],
    time: '',
    endTime: '',
    service: 'hairstyle',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isAdmin()) return;

    const student = students.find(s => s.id === formData.studentId);
    const booking = {
      ...formData,
      studentName: student.name
    };

    addModelBooking(booking);

    // Form reset
    setFormData({
      studentId: '',
      modelName: '',
      date: new Date().toISOString().split('T')[0],
      time: '',
      endTime: '',
      service: 'hairstyle',
      notes: ''
    });

    alert(`Modell hozzáadva: ${booking.modelName}`);
  };

  const handleEdit = (booking) => {
    setEditingModel(booking);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    if (!isAdmin()) return;

    const student = students.find(s => s.id === editingModel.studentId);
    updateModelBooking(editingModel.id, {
      ...editingModel,
      studentName: student.name
    });

    setEditingModel(null);
    alert(`Modell frissítve: ${editingModel.modelName}`);
  };

  const handleDelete = (bookingId) => {
    if (!isAdmin()) return;

    const booking = modelBookings.find(b => b.id === bookingId);
    if (window.confirm(`Biztosan törlöd ezt a modellt: ${booking.modelName}?`)) {
      deleteModelBooking(bookingId);
      alert(`Modell törölve: ${booking.modelName}`);
    }
  };

  // Filter és rendezés
  const filteredBookings = filter === 'all'
    ? modelBookings
    : modelBookings.filter(b => b.studentId === filter);

  const sortedBookings = [...filteredBookings].sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time}`);
    const dateB = new Date(`${b.date}T${b.time}`);
    return dateA - dateB;
  });

  const upcomingBookings = sortedBookings.filter(booking => {
    const bookingDateTime = new Date(`${booking.date}T${booking.time}`);
    return bookingDateTime >= new Date();
  });

  return (
    <div className="models-tab">
      {isAdmin() && (
        <div className="add-model-form">
          <h3>Új modell hozzáadása</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Tanuló:</label>
                <select
                  value={formData.studentId}
                  onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                  required
                >
                  <option value="">- Válassz -</option>
                  {students.map(student => (
                    <option key={student.id} value={student.id}>{student.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Modell neve:</label>
                <input
                  type="text"
                  value={formData.modelName}
                  onChange={(e) => setFormData({ ...formData, modelName: e.target.value })}
                  placeholder="pl. Kiss Anna"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Dátum:</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Kezdés:</label>
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Befejezés:</label>
                <input
                  type="time"
                  value={formData.endTime}
                  onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Szolgáltatás:</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                {Object.keys(serviceTypes).map(key => (
                  <option key={key} value={key}>{serviceTypes[key].label}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Jegyzetek:</label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows="2"
                placeholder="Speciális kérések..."
              />
            </div>

            <button type="submit" className="btn-primary">Hozzáadás</button>
          </form>
        </div>
      )}

      <div className="models-list-section">
        <h3>Közelgő modellek</h3>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Összes
          </button>
          {students.map(student => (
            <button
              key={student.id}
              className={`filter-btn ${filter === student.id ? 'active' : ''}`}
              onClick={() => setFilter(student.id)}
            >
              {student.name}
            </button>
          ))}
        </div>

        <div className="models-list">
          {upcomingBookings.length === 0 ? (
            <div className="no-models">Nincsenek közelgő modellek</div>
          ) : (
            upcomingBookings.map(booking => (
              <div key={booking.id} className={`model-item student-${booking.studentId}`}>
                <div className="model-info">
                  <div className="model-header">
                    <span className={`student-badge ${booking.studentId}`}>{booking.studentName}</span>
                    <span className="model-name">{booking.modelName}</span>
                  </div>
                  <div className="model-datetime">
                    📅 {booking.date} • ⏰ {booking.time} - {booking.endTime} • {serviceTypes[booking.service]?.label || booking.service}
                  </div>
                  {booking.notes && <div className="model-notes">{booking.notes}</div>}
                </div>
                {isAdmin() && (
                  <div className="model-actions">
                    <button className="btn-edit" onClick={() => handleEdit(booking)}>Szerkesztés</button>
                    <button className="btn-delete" onClick={() => handleDelete(booking.id)}>Törlés</button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Edit Modal */}
      {editingModel && (
        <div className="modal" onClick={() => setEditingModel(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={() => setEditingModel(null)}>&times;</span>
            <h2>Modell szerkesztése</h2>
            <form onSubmit={handleSaveEdit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Tanuló:</label>
                  <select
                    value={editingModel.studentId}
                    onChange={(e) => setEditingModel({ ...editingModel, studentId: e.target.value })}
                    required
                  >
                    {students.map(student => (
                      <option key={student.id} value={student.id}>{student.name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Modell neve:</label>
                  <input
                    type="text"
                    value={editingModel.modelName}
                    onChange={(e) => setEditingModel({ ...editingModel, modelName: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Dátum:</label>
                  <input
                    type="date"
                    value={editingModel.date}
                    onChange={(e) => setEditingModel({ ...editingModel, date: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Kezdés:</label>
                  <input
                    type="time"
                    value={editingModel.time}
                    onChange={(e) => setEditingModel({ ...editingModel, time: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Befejezés:</label>
                  <input
                    type="time"
                    value={editingModel.endTime}
                    onChange={(e) => setEditingModel({ ...editingModel, endTime: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Szolgáltatás:</label>
                <select
                  value={editingModel.service}
                  onChange={(e) => setEditingModel({ ...editingModel, service: e.target.value })}
                >
                  {Object.keys(serviceTypes).map(key => (
                    <option key={key} value={key}>{serviceTypes[key].label}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Jegyzetek:</label>
                <textarea
                  value={editingModel.notes || ''}
                  onChange={(e) => setEditingModel({ ...editingModel, notes: e.target.value })}
                  rows="2"
                />
              </div>

              <div className="modal-actions">
                <button type="submit" className="btn-primary">Mentés</button>
                <button type="button" className="btn-secondary" onClick={() => setEditingModel(null)}>Mégse</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModelsTab;
