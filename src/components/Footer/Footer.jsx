import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from '../../hooks/useTranslation';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <p><FontAwesomeIcon icon={faCopyright} /> {t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;
