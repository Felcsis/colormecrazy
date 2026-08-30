import React, { useEffect, useState, useCallback, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faComment, faPlay, faLayerGroup, faExpand } from '@fortawesome/free-solid-svg-icons';
import './InstagramFeed.css';
import { useTranslation } from '../../hooks/useTranslation';

const PROFILE_URL = 'https://www.instagram.com/colorme_c_hair/';
const HANDLE = '@colorme_c_hair';
const TILE_COUNT = 7;
// A tartalék képekhez csak a jelenlegi csapat portfóliói kellenek
const ACTIVE_PORTFOLIOS = ['felcsi', 'gitta', 'bogi'];

// Az élő Instagram adatokat a build előtt futó fetch-instagram.js írja ki
// a public/instagram-feed.json fájlba. Ha nincs kulcs vagy nem sikerül a
// letöltés, a galéria képeire esünk vissza, hogy a szekció mindig éljen.
const loadFeed = async () => {
  try {
    const res = await fetch('/instagram-feed.json', { cache: 'no-cache' });
    if (res.ok) {
      const data = await res.json();
      if (data?.posts?.length) return data;
    }
  } catch {
    // nincs élő feed – jöhet a tartalék
  }

  try {
    const res = await fetch('/portfolio-images.json');
    if (!res.ok) return null;
    const byMember = await res.json();
    // a fájl már teljes útvonalakat tartalmaz (/images/portfolios/...)
    const lists = ACTIVE_PORTFOLIOS.map((m) => (byMember[m] || []).filter(Boolean));

    // felváltva egy-egy kép mindenkitől, hogy ne egy dolgozó munkái
    // kerüljenek egymás mellé a falon
    const mixed = [];
    const longest = Math.max(0, ...lists.map((l) => l.length));
    for (let i = 0; i < longest; i++) {
      for (const list of lists) {
        if (list[i]) mixed.push({ image: list[i] });
      }
    }

    return { posts: mixed, fallback: true };
  } catch {
    return null;
  }
};

const formatCount = (n) => {
  if (!n && n !== 0) return null;
  return n >= 1000 ? `${(n / 1000).toFixed(1).replace('.0', '')}k` : String(n);
};

const InstagramFeed = () => {
  const { t } = useTranslation();
  const [feed, setFeed] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  // a megnyitáskori görgetési pozíció, hogy bezárás után pontosan
  // ugyanoda térjünk vissza
  const scrollYRef = useRef(0);

  useEffect(() => {
    let alive = true;
    loadFeed().then((data) => {
      if (alive) setFeed(data);
    });
    return () => {
      alive = false;
    };
  }, []);

  const posts = (feed?.posts || []).slice(0, TILE_COUNT);
  const followers = formatCount(feed?.followers);
  const isOpen = openIndex !== null;
  const current = isOpen ? posts[openIndex] : null;

  const openLightbox = (index) => {
    scrollYRef.current = window.scrollY;
    setOpenIndex(index);
  };

  const closeLightbox = useCallback(() => setOpenIndex(null), []);

  const step = useCallback(
    (delta) => {
      setOpenIndex((i) => (i === null ? i : (i + delta + posts.length) % posts.length));
    },
    [posts.length]
  );

  // Amíg nyitva a nagy kép, a háttér ne görögjön. A body rögzítésekor
  // eltárolt pozíciót bezáráskor visszaállítjuk – így oda kerülünk vissza,
  // ahol a képre kattintottunk.
  useEffect(() => {
    if (!isOpen) return;

    const y = scrollYRef.current;
    const { body } = document;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width
    };

    body.style.position = 'fixed';
    body.style.top = `-${y}px`;
    body.style.width = '100%';

    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'ArrowRight') step(1);
    };
    window.addEventListener('keydown', onKey);

    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.width = prev.width;

      // az oldalon `scroll-behavior: smooth` van – bezáráskor viszont
      // azonnal, ugrás nélkül kell visszaállni a kiindulási pozícióra
      const root = document.documentElement;
      const prevBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      window.scrollTo(0, y);
      root.style.scrollBehavior = prevBehavior;

      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, closeLightbox, step]);

  return (
    <section className="section instagram-feed" id="instagram">
      <div className="container">
        <div className="instagram-header">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
            {t('instagram.title')}
          </h2>
          <p className="section-subtitle">{t('instagram.subtitle')}</p>
        </div>

        <div className="instagram-mosaic">
          {posts.map((post, i) => (
            <button
              key={(post.permalink || post.image) + i}
              type="button"
              className="ig-tile"
              onClick={() => openLightbox(i)}
              aria-label={t('instagram.openImage')}
            >
              <img src={post.image} alt="" loading="lazy" />

              {post.type === 'VIDEO' && (
                <span className="ig-tile-badge"><FontAwesomeIcon icon={faPlay} /></span>
              )}
              {post.type === 'CAROUSEL_ALBUM' && (
                <span className="ig-tile-badge"><FontAwesomeIcon icon={faLayerGroup} /></span>
              )}

              <span className="ig-tile-overlay">
                {(post.likes || post.comments) ? (
                  <span className="ig-tile-stats">
                    {post.likes != null && (
                      <span><FontAwesomeIcon icon={faHeart} /> {post.likes}</span>
                    )}
                    {post.comments != null && (
                      <span><FontAwesomeIcon icon={faComment} /> {post.comments}</span>
                    )}
                  </span>
                ) : (
                  <FontAwesomeIcon icon={faExpand} className="ig-tile-mark" />
                )}
                <span className="ig-tile-handle">{HANDLE}</span>
              </span>
            </button>
          ))}

          {/* Követő kártya – a rács utolsó helyén */}
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ig-tile ig-follow-card"
          >
            <FontAwesomeIcon icon={faInstagram} className="ig-follow-icon" />
            <span className="ig-follow-handle">{HANDLE}</span>
            {followers && (
              <span className="ig-follow-count">
                <strong>{followers}</strong> {t('instagram.followers')}
              </span>
            )}
            <span className="ig-follow-btn">{t('instagram.followButton')}</span>
          </a>
        </div>
      </div>

      {/* Nagy kép – a kép mellé kattintva bezárul */}
      {isOpen && (
        <div className="ig-lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
          <button className="ig-lightbox-close" onClick={closeLightbox} aria-label={t('instagram.close')}>
            ✕
          </button>

          {posts.length > 1 && (
            <>
              <button
                className="ig-lightbox-nav ig-lightbox-prev"
                onClick={(e) => { e.stopPropagation(); step(-1); }}
                aria-label="‹"
              >
                ‹
              </button>
              <button
                className="ig-lightbox-nav ig-lightbox-next"
                onClick={(e) => { e.stopPropagation(); step(1); }}
                aria-label="›"
              >
                ›
              </button>
            </>
          )}

          <figure className="ig-lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img src={current.image} alt="" className="ig-lightbox-image" />
            <figcaption className="ig-lightbox-caption">
              {current.caption && <p className="ig-lightbox-text">{current.caption}</p>}
              <span className="ig-lightbox-meta">
                {current.likes != null && (
                  <span><FontAwesomeIcon icon={faHeart} /> {current.likes}</span>
                )}
                {current.comments != null && (
                  <span><FontAwesomeIcon icon={faComment} /> {current.comments}</span>
                )}
                <span className="ig-lightbox-counter">{openIndex + 1} / {posts.length}</span>
              </span>
              <a
                href={current.permalink || PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ig-lightbox-link"
              >
                <FontAwesomeIcon icon={faInstagram} /> {t('instagram.viewOnInstagram')}
              </a>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
};

export default InstagramFeed;
