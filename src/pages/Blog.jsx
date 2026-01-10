import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBlog,
  faCalendarAlt,
  faUser,
  faChevronLeft,
  faNewspaper
} from '@fortawesome/free-solid-svg-icons';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-page">
      <Link to="/#bemutatkozas" className="back-button">
        <FontAwesomeIcon icon={faChevronLeft} /> Vissza
      </Link>

      <div className="blog-hero">
        <div className="container">
          <FontAwesomeIcon icon={faBlog} className="blog-hero-icon" />
          <h1 className="blog-hero-title">Blog</h1>
          <p className="blog-hero-subtitle">
            Trendek, tippek és hírek a fodrászat világából
          </p>
        </div>
      </div>

      <section className="blog-content">
        <div className="container">
          <div className="blog-intro">
            <FontAwesomeIcon icon={faNewspaper} className="intro-icon" />
            <h2>Hamarosan...</h2>
            <p>
              Blogunk jelenleg fejlesztés alatt áll. Itt hamarosan megtalálhatod
              a legfrissebb trendeket, szakmai tippeket, valamint érdekes történeteket
              a Color Me Crazy csapatától.
            </p>
          </div>

          <div className="blog-placeholder-grid">
            <div className="blog-placeholder-card">
              <div className="placeholder-icon">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </div>
              <h3>Tervezett Témák</h3>
              <ul>
                <li>Hajápolási tippek</li>
                <li>Divatos hajszínek és technikák</li>
                <li>Kulisszák mögött a szalonban</li>
                <li>Előtte-utána fotók</li>
                <li>Szakmai tanácsok otthoni ápoláshoz</li>
              </ul>
            </div>

            <div className="blog-placeholder-card">
              <div className="placeholder-icon">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <h3>Szakértőink</h3>
              <p>
                Fodrászaink és kozmetikusunk rendszeresen osztják meg
                szakmai tudásukat, tapasztalataikat és tippjeiket,
                hogy te is profin gondoskodhass hajadról és bőrödről.
              </p>
            </div>
          </div>

          <div className="blog-cta">
            <p>
              Kövess minket közösségi médián, hogy ne maradj le a legfrissebb hírekről
              és tippekről!
            </p>
            <div className="cta-buttons">
              <a href="/#kapcsolat" className="cta-button">
                Iratkozz fel hírlevelünkre
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
