import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faStar,
  faUsers,
  faInfoCircle,
  faGraduationCap,
  faBlog,
  faEnvelope,
  faSearch,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('hu');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'hu' ? 'en' : 'hu');
  };

  const menuItems = {
    hu: [
      { href: '/#hero', label: 'Kezdőlap', icon: faHome },
      { href: '/#ertekeles', label: 'Értékelés', icon: faStar },
      { href: '/#csapat', label: 'Munkatársak', icon: faUsers },
      { href: '/#bemutatkozas', label: 'Bemutatkozás', icon: faInfoCircle },
      { href: '/oktatas', label: 'Oktatás', icon: faGraduationCap },
      { href: '/blog', label: 'Blog', icon: faBlog },
      { href: '/#kapcsolat', label: 'Kapcsolat', icon: faEnvelope }
    ],
    en: [
      { href: '/#hero', label: 'Home', icon: faHome },
      { href: '/#ertekeles', label: 'Reviews', icon: faStar },
      { href: '/#csapat', label: 'Team', icon: faUsers },
      { href: '/#bemutatkozas', label: 'About', icon: faInfoCircle },
      { href: '/oktatas', label: 'Education', icon: faGraduationCap },
      { href: '/blog', label: 'Blog', icon: faBlog },
      { href: '/#kapcsolat', label: 'Contact', icon: faEnvelope }
    ]
  };

  return (
    <nav className="navbar">
      <div className="nav-container-new">
        {/* Left Menu Items */}
        <ul className={`nav-menu nav-menu-left ${isMenuOpen ? 'active' : ''}`}>
          {menuItems[language].slice(0, 3).map((item, index) => (
            <li key={index}>
              <a href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Center Logo */}
        <a href="/#hero" className="logo-center">
          <img src="/images/logo.png" alt="Color Me Crazy" />
        </a>

        {/* Right Menu Items */}
        <ul className={`nav-menu nav-menu-right ${isMenuOpen ? 'active' : ''}`}>
          {menuItems[language].slice(3).map((item, index) => (
            <li key={index}>
              <a href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Icon Actions */}
        <div className="nav-icons">
          <button className="nav-icon-btn" aria-label="Keresés">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <button
            className="nav-icon-btn language-toggle"
            onClick={toggleLanguage}
            aria-label="Nyelv váltás"
          >
            <FontAwesomeIcon icon={faGlobe} />
            <span className="lang-text">{language.toUpperCase()}</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
