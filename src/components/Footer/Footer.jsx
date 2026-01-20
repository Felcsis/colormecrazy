import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from '../../hooks/useTranslation';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-legal-links">
          <Link to="/adatkezelesi-tajekoztato" className="footer-link">
            {t('footer.privacyPolicy')}
          </Link>
          <span className="footer-separator">|</span>
          <Link to="/aszf" className="footer-link">
            {t('footer.termsAndConditions')}
          </Link>
        </div>
        <p className="footer-copyright">
          <FontAwesomeIcon icon={faCopyright} /> {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
