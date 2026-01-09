import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInfoCircle,
  faUsers,
  faClipboardList,
  faImages,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="logo">
          <img src="/images/logo.png" alt="Color Me Crazy" />
        </a>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#bemutatkozas" onClick={closeMenu}><FontAwesomeIcon icon={faInfoCircle} /> Rólunk</a></li>
          <li><a href="#csapat" onClick={closeMenu}><FontAwesomeIcon icon={faUsers} /> Csapat</a></li>
          <li><a href="#szolgaltatasok" onClick={closeMenu}><FontAwesomeIcon icon={faClipboardList} /> Szolgáltatások</a></li>
          <li><a href="#galeria" onClick={closeMenu}><FontAwesomeIcon icon={faImages} /> Galéria</a></li>
          <li><a href="#kapcsolat" onClick={closeMenu}><FontAwesomeIcon icon={faEnvelope} /> Kapcsolat</a></li>
        </ul>
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
