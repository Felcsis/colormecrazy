import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';
import {
  faBars,
  faTimes,
  faHome,
  faInfoCircle,
  faUsers,
  faEnvelope,
  faScissors,
  faImages,
  faGraduationCap,
  faStar,
  faMoneyBill,
  faSearch,
  faGlobe,
  faChevronDown,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import SearchModal from '../SearchModal/SearchModal';
import { useTranslation } from '../../hooks/useTranslation';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    home: false,
    services: false
  });
  const navigate = useNavigate();
  const { t, language, setLanguage } = useTranslation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'hu' ? 'en' : 'hu');
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleNavigation = (path) => {
    closeSidebar();
    if (path.startsWith('/#')) {
      // Anchor link on homepage
      const element = document.getElementById(path.substring(2));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(path.substring(2));
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      navigate(path);
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    closeSidebar();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openSearch = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar-sidebar">
        <div className="navbar-sidebar-container">
          {/* Hamburger Menu Button */}
          <button
            className="sidebar-hamburger"
            onClick={toggleSidebar}
            aria-label="Menu"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          {/* Center Logo */}
          <Link to="/" className="navbar-sidebar-logo" onClick={handleLogoClick}>
            <img src="/images/logo-transparent.webp" alt="Color Me Crazy" />
          </Link>

          {/* Right Actions */}
          <div className="navbar-sidebar-actions">
            <button className="navbar-action-btn" onClick={openSearch} aria-label="Search">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <button
              className="navbar-action-btn language-btn"
              onClick={toggleLanguage}
              aria-label="Language"
            >
              <FontAwesomeIcon icon={faGlobe} />
              <span className="lang-label">{language.toUpperCase()}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar}></div>
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <button className="sidebar-close" onClick={closeSidebar}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <Link to="/" className="sidebar-logo" onClick={handleLogoClick}>
            <img src="/images/logo-transparent.webp" alt="Color Me Crazy" />
          </Link>
        </div>

        <nav className="sidebar-nav">
          {/* Kezdőlap Section */}
          <div className="sidebar-section">
            <button
              className="sidebar-section-header"
              onClick={() => toggleSection('home')}
            >
              <FontAwesomeIcon
                icon={expandedSections.home ? faChevronDown : faChevronRight}
                className="sidebar-chevron"
              />
              <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
              <span>{t('navbar.home')}</span>
            </button>
            {expandedSections.home && (
              <div className="sidebar-submenu">
                <button
                  className="sidebar-link sidebar-sublink"
                  onClick={() => handleNavigation('/#hero')}
                >
                  <span className="sidebar-bullet">•</span>
                  Hero
                </button>
                <button
                  className="sidebar-link sidebar-sublink"
                  onClick={() => handleNavigation('/#bemutatkozas')}
                >
                  <span className="sidebar-bullet">•</span>
                  {t('navbar.about')}
                </button>
                <button
                  className="sidebar-link sidebar-sublink"
                  onClick={() => handleNavigation('/#kapcsolat')}
                >
                  <span className="sidebar-bullet">•</span>
                  {t('navbar.contact')}
                </button>
              </div>
            )}
          </div>

          {/* Szolgáltatások Section */}
          <div className="sidebar-section">
            <button
              className="sidebar-section-header"
              onClick={() => toggleSection('services')}
            >
              <FontAwesomeIcon
                icon={expandedSections.services ? faChevronDown : faChevronRight}
                className="sidebar-chevron"
              />
              <FontAwesomeIcon icon={faScissors} className="sidebar-icon" />
              <span>{t('navbar.services')}</span>
            </button>
            {expandedSections.services && (
              <div className="sidebar-submenu">
                <button
                  className="sidebar-link sidebar-sublink"
                  onClick={() => handleNavigation('/szolgaltatasok')}
                >
                  <span className="sidebar-bullet">•</span>
                  {t('navbar.magicCards')}
                </button>
                <button
                  className="sidebar-link sidebar-sublink"
                  onClick={() => handleNavigation('/#szolgaltatasok')}
                >
                  <span className="sidebar-bullet">•</span>
                  {t('navbar.priceList')}
                </button>
                <button
                  className="sidebar-link sidebar-sublink"
                  onClick={() => handleNavigation('/oktatas')}
                >
                  <span className="sidebar-bullet">•</span>
                  {t('navbar.education')}
                </button>
              </div>
            )}
          </div>

          {/* Munkatársak */}
          <div className="sidebar-section">
            <button
              className="sidebar-link"
              onClick={() => handleNavigation('/#csapat')}
            >
              <FontAwesomeIcon icon={faChevronRight} className="sidebar-chevron-simple" />
              <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />
              <span>{t('navbar.team')}</span>
            </button>
          </div>

          {/* Galéria */}
          <div className="sidebar-section">
            <button
              className="sidebar-link"
              onClick={() => handleNavigation('/galeria')}
            >
              <FontAwesomeIcon icon={faChevronRight} className="sidebar-chevron-simple" />
              <FontAwesomeIcon icon={faImages} className="sidebar-icon" />
              <span>{t('navbar.gallery')}</span>
            </button>
          </div>

          {/* Értékelések */}
          <div className="sidebar-section">
            <button
              className="sidebar-link"
              onClick={() => handleNavigation('/#ertekeles')}
            >
              <FontAwesomeIcon icon={faChevronRight} className="sidebar-chevron-simple" />
              <FontAwesomeIcon icon={faStar} className="sidebar-icon" />
              <span>{t('navbar.reviews')}</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={closeSearch} />
    </>
  );
};

export default Navbar;
