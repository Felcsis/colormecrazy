import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './InstagramFeed.css';
import { useTranslation } from '../../hooks/useTranslation';

const InstagramFeed = () => {
  const { t } = useTranslation();
  const feedRef = useRef(null);

  useEffect(() => {
    // Instagram beágyazott widget script betöltése
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Ha már be van töltve az Instagram script, akkor újra kell renderelni
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }

    return () => {
      // Cleanup: script eltávolítása
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="section instagram-feed" id="instagram">
      <div className="container">
        <div className="instagram-header">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
            {t('instagram.title')}
          </h2>
          <p className="section-subtitle">{t('instagram.subtitle')}</p>
          <a
            href="https://www.instagram.com/colorme_c_hair/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-instagram"
          >
            <FontAwesomeIcon icon={faInstagram} /> {t('instagram.followButton')}
          </a>
        </div>

        <div className="instagram-grid" ref={feedRef}>
          {/* Instagram beágyazott posztok - cseréld ki a saját posztjaidra */}
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/p/DS-mGmeDwCb/"
            data-instgrm-version="14"
          ></blockquote>

          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/p/DTgUKNHDbaF/"
            data-instgrm-version="14"
          ></blockquote>

          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/p/DJEfi3ONOQZ/"
            data-instgrm-version="14"
          ></blockquote>
        </div>

        <div className="instagram-cta">
          <p>{t('instagram.viewMore')}</p>
          <a
            href="https://www.instagram.com/colorme_c_hair/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
          >
            @colorme_c_hair
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
