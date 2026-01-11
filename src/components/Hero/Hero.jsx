import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faCalendarCheck
} from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-logo">
          <img src="/images/logo-transparent.webp" alt="Color Me Crazy" />
        </div>
        <p className="hero-subtitle">Fodrászat & Kozmetika</p>
        <p className="hero-description">Női - Férfi - Gyermek - Raszta</p>
        <div className="hero-buttons">
          <a href="#bemutatkozas" className="btn btn-primary">
            <FontAwesomeIcon icon={faHeart} /> Ismerj meg minket
          </a>
          <a href="#kapcsolat" className="btn btn-secondary">
            <FontAwesomeIcon icon={faCalendarCheck} /> Időpontfoglalás
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
