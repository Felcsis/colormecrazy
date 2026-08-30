import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSeedling,
  faSun,
  faLeaf,
  faSnowflake
} from '@fortawesome/free-solid-svg-icons';
import { SEASONS, SEASON_LABELS } from '../../hooks/useSeason';
import { useSeasonContext } from '../../context/SeasonContext';
import { useTranslation } from '../../hooks/useTranslation';
import './SeasonSwitcher.css';

const SEASON_ICONS = {
  tavasz: faSeedling,
  nyar: faSun,
  osz: faLeaf,
  tel: faSnowflake
};

const SeasonSwitcher = () => {
  const { season, setSeason } = useSeasonContext();
  const { language } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Kattintás a menün kívül vagy Escape bezárja a listát
  useEffect(() => {
    if (!isOpen) return;

    const handleOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, [isOpen]);

  const label = (key) => SEASON_LABELS[key][language] || SEASON_LABELS[key].hu;

  return (
    <div className="season-switcher" ref={wrapperRef}>
      <button
        className="navbar-action-btn season-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={language === 'en' ? 'Color theme' : 'Színvilág'}
        aria-expanded={isOpen}
        title={label(season)}
      >
        <FontAwesomeIcon icon={SEASON_ICONS[season]} />
      </button>

      {isOpen && (
        <div className="season-menu" role="menu">
          <span className="season-menu-title">
            {language === 'en' ? 'Color theme' : 'Színvilág'}
          </span>
          {SEASONS.map((key) => (
            <button
              key={key}
              role="menuitemradio"
              aria-checked={season === key}
              className={`season-menu-item ${season === key ? 'active' : ''}`}
              onClick={() => {
                setSeason(key);
                setIsOpen(false);
              }}
            >
              <FontAwesomeIcon icon={SEASON_ICONS[key]} className="season-menu-icon" />
              <span>{label(key)}</span>
              <span className={`season-swatch season-swatch-${key}`} aria-hidden="true" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SeasonSwitcher;
