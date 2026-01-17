import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

  return (
    <section className="section kapcsolat" id="kapcsolat">
      <div className="container">
        <h2 className="section-title">Kapcsolat</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Lépj kapcsolatba velünk!</h3>
            <p>Foglalj időpontot telefonon vagy Messengeren!</p>
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
              <div className="contact-item">
                <FontAwesomeIcon icon={faClock} className="contact-icon" />
                <div className="opening-hours">
                  <div className="opening-hours-title">Nyitvatartás:</div>
                  <div>Hétfő - Péntek: 9:00 - 18:00</div>
                  <div>Szombat - Vasárnap: Zárva</div>
                </div>
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
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2758.8471234567!2d20.1479!3d46.2533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4744870f0cc0a0a1%3A0x0!2sNemes%20Tak%C3%A1cs%20utca%208%2C%20Szeged%2C%206720!5e0!3m2!1shu!2shu!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Color Me Crazy helye - Nemes Takács utca 8, Szeged"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
