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
import { useTranslation } from '../../hooks/useTranslation';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="section kapcsolat" id="kapcsolat">
      <div className="container">
        <h2 className="section-title">{t('contact.title')}</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>{t('contact.subtitle')}</h3>
            <p>{t('contact.bookingText')}</p>
            <div className="contact-details">
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <a href={`mailto:${t('contact.email')}`}>{t('contact.email')}</a>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                <a href={`tel:${t('contact.phone').replace(/\s/g, '')}`}>{t('contact.phone')}</a>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
                <span>{t('contact.address')}</span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faClock} className="contact-icon" />
                <div className="opening-hours">
                  <div className="opening-hours-title">{t('contact.openingHoursTitle')}</div>
                  <div>{t('contact.openingWeekdays')}</div>
                  <div>{t('contact.openingWeekend')}</div>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href="https://www.facebook.com/colormecrzy" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faFacebook} /> {t('contact.facebook')}
              </a>
              <a href="https://www.instagram.com/colorme_c_hair/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faInstagram} /> {t('contact.instagram')}
              </a>
            </div>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d690.4724182411577!2d20.147524869558433!3d46.25332138396734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4744896d96eb15a5%3A0xd6ebfe828844cd8!2sColor%20Me%20Crazy%20Extr%C3%A9m%20Fodr%C3%A1sz!5e1!3m2!1shu!2shu!4v1768680179561!5m2!1shu!2shu"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Color Me Crazy Extrém Fodrász - Nemes Takács utca 8, Szeged"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
