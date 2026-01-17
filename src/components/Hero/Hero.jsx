import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faCalendarCheck
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from '../../hooks/useTranslation';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-logo">
          <img src="/images/logo-transparent.webp" alt="Color Me Crazy" />
        </div>
        <p className="hero-subtitle">{t('hero.subtitle')}</p>
        <p className="hero-description">{t('hero.description')}</p>
        <div className="hero-buttons">
          <a href="#bemutatkozas" className="btn btn-primary">
            <FontAwesomeIcon icon={faHeart} /> {t('hero.ctaKnowUs')}
          </a>
          <a href="#kapcsolat" className="btn btn-secondary">
            <FontAwesomeIcon icon={faCalendarCheck} /> {t('hero.ctaBooking')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
