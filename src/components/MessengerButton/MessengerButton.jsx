import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import './MessengerButton.css';

const MessengerButton = () => {
  return (
    <a
      href="https://m.me/colormecrzy"
      target="_blank"
      rel="noopener noreferrer"
      className="messenger-button"
      aria-label="Írj nekünk Messengeren"
    >
      <FontAwesomeIcon icon={faFacebookMessenger} />
    </a>
  );
};

export default MessengerButton;
