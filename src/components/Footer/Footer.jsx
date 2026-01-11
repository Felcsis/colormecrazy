import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p><FontAwesomeIcon icon={faCopyright} /> 2024 Color Me Crazy. Minden jog fenntartva.</p>
      </div>
    </footer>
  );
};

export default Footer;
