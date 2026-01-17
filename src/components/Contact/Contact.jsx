import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Köszönjük az üzenetet! Hamarosan jelentkezünk.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="section kapcsolat" id="kapcsolat">
      <div className="container">
        <h2 className="section-title">Kapcsolat</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Lépj kapcsolatba velünk!</h3>
            <p>Foglalj időpontot vagy írj nekünk, ha kérdésed van!</p>
            <div className="contact-details">
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <a href="mailto:pinterfelicia8@gmail.com">pinterfelicia8@gmail.com</a>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                <a href="tel:+36300894587">+36 30 089 4587</a>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
                <span>Nemes Takács utca 8, Szeged</span>
              </div>
            </div>
            <div className="social-links">
              <a href="https://www.facebook.com/colormecrazy" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </a>
              <a href="https://www.instagram.com/colorme_c_hair/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
            </div>
          </div>
          <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                placeholder="Neved"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                placeholder="Email címed"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="subject"
                placeholder="Tárgy"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                placeholder="Üzeneted"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              <FontAwesomeIcon icon={faPaperPlane} /> Küldés
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
