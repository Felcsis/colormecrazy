import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faCoins,
  faHome,
  faChevronLeft,
  faPaintBrush,
  faCut,
  faWandMagicSparkles,
  faPaw,
  faWater,
  faStar,
  faUser,
  faBolt,
  faHeart,
  faGlobe,
  faScissors,
  faFire,
  faChild,
  faLink,
  faComment,
  faGem,
  faSpa,
  faDroplet,
  faVolumeHigh,
  faPumpSoap,
  faPlus,
  faRuler,
  faClipboard,
  faRainbow,
  faBriefcase
} from '@fortawesome/free-solid-svg-icons';
import { servicesData, findDeckById } from '../../data/servicesData';
import './MagicServiceCards.css';
import { useTranslation } from '../../hooks/useTranslation';

const MagicServiceCards = () => {
  const [navigationPath, setNavigationPath] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [particles, setParticles] = useState([]);
  const { t, language } = useTranslation();

  // Icon mapping - converts icon names/emojis to FontAwesome icons
  const iconMap = {
    // FontAwesome icon names
    'faPaintBrush': faPaintBrush,
    'faCut': faCut,
    'faScissors': faScissors,
    'faWandMagicSparkles': faWandMagicSparkles,
    'faPaw': faPaw,
    'faWater': faWater,
    'faStar': faStar,
    'faUser': faUser,
    'faBolt': faBolt,
    'faHeart': faHeart,
    'faGlobe': faGlobe,
    'faFire': faFire,
    'faChild': faChild,
    'faLink': faLink,
    'faComment': faComment,
    'faGem': faGem,
    'faSpa': faSpa,
    'faDroplet': faDroplet,
    'faVolumeHigh': faVolumeHigh,
    'faPumpSoap': faPumpSoap,
    'faPlus': faPlus,
    'faRuler': faRuler,
    'faClipboard': faClipboard,
    'faRainbow': faRainbow,
    'faBriefcase': faBriefcase,
    // Emoji fallbacks (for backward compatibility)
    '🎨': faPaintBrush,
    '✂️': faCut,
    '🦋': faWandMagicSparkles,
    '🐺': faPaw,
    '🌊': faWater,
    '🐙': faStar,
    '✨': faWandMagicSparkles,
    '🌟': faStar,
    '💁': faUser,
    '💇': faCut,
    '⚡': faBolt,
    '🎀': faHeart,
    '🇰🇷': faGlobe,
    '🔥': faFire,
    '👶': faChild,
    '🔗': faLink,
    '💬': faComment,
    '💎': faGem,
    '💆': faSpa,
    '🫧': faDroplet,
    '🔊': faVolumeHigh,
    '🧴': faPumpSoap,
    '➕': faPlus,
    '📐': faRuler,
    '📋': faClipboard,
    '🌈': faRainbow,
    '👔': faBriefcase,
    '👩': faUser,
    '👨': faUser
  };

  // Get FontAwesome icon from name or emoji
  const getIcon = (iconNameOrEmoji) => {
    return iconMap[iconNameOrEmoji] || null;
  };

  // Helper function to get localized text
  const getLocalizedText = (item, field) => {
    if (language === 'en' && item[`${field}_en`]) {
      return item[`${field}_en`];
    }
    return item[field] || '';
  };

  // Helper function to get localized deck name
  const getDeckName = (deck) => {
    return language === 'en' && deck.englishName ? deck.englishName : deck.name;
  };

  // Jelenlegi megjelenítendő tartalom
  const getCurrentContent = () => {
    if (navigationPath.length === 0) {
      return { type: 'main-decks', data: servicesData.mainDecks };
    }

    let current = findDeckById(navigationPath[navigationPath.length - 1]);

    if (current.directCards && current.cards) {
      return { type: 'cards', data: current.cards, deck: current };
    }

    if (current.subDecks) {
      return { type: 'sub-decks', data: current.subDecks, deck: current };
    }

    if (current.subSubDecks) {
      return { type: 'sub-sub-decks', data: current.subSubDecks, deck: current };
    }

    if (current.subSubSubDecks) {
      return { type: 'sub-sub-sub-decks', data: current.subSubSubDecks, deck: current };
    }

    return { type: 'unknown', data: [] };
  };

  // Pakli megnyitása
  const openDeck = (deckId) => {
    setNavigationPath([...navigationPath, deckId]);
    createParticleExplosion();
  };

  // Vissza navigáció
  const goBack = () => {
    if (navigationPath.length > 0) {
      setNavigationPath(navigationPath.slice(0, -1));
    }
  };

  // Főoldalra
  const goHome = () => {
    setNavigationPath([]);
    setSelectedCard(null);
  };

  // Kártya megnyitása
  const openCard = (card) => {
    setSelectedCard(card);
    createParticleExplosion();
  };

  // Kártya bezárása
  const closeCard = () => {
    setSelectedCard(null);
    setParticles([]);
  };

  // Részecske robbanás generálás
  const createParticleExplosion = () => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 1 + Math.random() * 1
    }));
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 2000);
  };

  // Scroll az árlistához
  const scrollToPriceList = () => {
    const priceListSection = document.getElementById('szolgaltatasok');
    if (priceListSection) {
      priceListSection.scrollIntoView({ behavior: 'smooth' });
      closeCard();
    }
  };

  // Breadcrumb generálás
  const getBreadcrumb = () => {
    const crumbs = [{ id: 'home', name: 'Főoldal', icon: faHome }];

    navigationPath.forEach((deckId) => {
      const deck = findDeckById(deckId);
      if (deck) {
        crumbs.push({
          id: deck.id,
          name: getDeckName(deck),
          icon: getIcon(deck.icon)
        });
      }
    });

    return crumbs;
  };

  const currentContent = getCurrentContent();
  const breadcrumb = getBreadcrumb();

  return (
    <section className="magic-services-section" id="magic-services">
      {/* Backdrop - kattintásra bezár */}
      {selectedCard && (
        <div
          className="card-backdrop"
          onClick={closeCard}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.3)',
            zIndex: 900,
            cursor: 'pointer'
          }}
        />
      )}

      <div className="container">
        {/* Header + Breadcrumb */}
        <div className="magic-services-header">
          <h2 className="magic-title">{'Varázslatos Szolgáltatásaink'}</h2>

          {navigationPath.length > 0 ? (
            <div className="breadcrumb-navigation">
              {breadcrumb.map((crumb, index) => (
                <React.Fragment key={crumb.id}>
                  {index > 0 && <span className="breadcrumb-separator">›</span>}
                  <button
                    className={`breadcrumb-item ${index === breadcrumb.length - 1 ? 'active' : ''}`}
                    onClick={() => {
                      if (index === 0) {
                        goHome();
                      } else {
                        setNavigationPath(navigationPath.slice(0, index));
                      }
                    }}
                  >
                    {crumb.icon && <FontAwesomeIcon icon={crumb.icon} />} {crumb.name}
                  </button>
                </React.Fragment>
              ))}
            </div>
          ) : (
            <p className="magic-subtitle">{'Húzz egy paklit a varázsláshoz'}</p>
          )}

          {/* Vissza gombok */}
          {navigationPath.length > 0 && (
            <div className="navigation-buttons">
              <button className="nav-btn back-btn" onClick={goBack}>
                <FontAwesomeIcon icon={faChevronLeft} /> {'Vissza'}
              </button>
              {navigationPath.length > 1 && (
                <button className="nav-btn home-btn" onClick={goHome}>
                  <FontAwesomeIcon icon={faHome} /> {'Főoldal'}
                </button>
              )}
            </div>
          )}
        </div>

        {/* MAIN CONTENT - Paklik vagy Kártyák renderelése */}
        <div className={`magic-cards-grid ${selectedCard ? 'card-selected' : ''}`}>
          {/* FŐPAKLIK (Fodrászat, Kozmetika) */}
          {currentContent.type === 'main-decks' && currentContent.data.map((mainDeck) => (
            <div
              key={mainDeck.id}
              className="magic-deck main-deck"
              onClick={() => openDeck(mainDeck.id)}
            >
              <div className="deck-stack">
                <div className="deck-card deck-back"></div>
                <div className="deck-card deck-back"></div>
                <div className="deck-card deck-front">
                  <div className="card-arcana">{mainDeck.arcana}</div>
                  <div className="card-corner top-left">✦</div>
                  <div className="card-corner top-right">✦</div>
                  <div className="card-corner bottom-left">✦</div>
                  <div className="card-corner bottom-right">✦</div>

                  <div className="deck-icon-container">
                    {getIcon(mainDeck.icon) ? (
                      <FontAwesomeIcon icon={getIcon(mainDeck.icon)} className="deck-icon" />
                    ) : (
                      <span className="deck-icon">{mainDeck.icon}</span>
                    )}
                  </div>

                  <div className="card-divider"></div>

                  <div className="card-content">
                    <h3 className="card-title">{getDeckName(mainDeck)}</h3>
                    <p className="card-subtitle">{language === 'en' ? mainDeck.name : mainDeck.englishName}</p>
                    <p className="deck-info">{mainDeck.deckCount} {'pakli'}</p>
                    <p className="deck-info">{mainDeck.totalCards} {'kártya'}</p>
                  </div>

                  <div className="deck-action">
                    <span className="deck-action-text">{'HÚZD KI'}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* AL-PAKLIK, AL-AL-PAKLIK, AL-AL-AL-PAKLIK */}
          {(currentContent.type === 'sub-decks' ||
            currentContent.type === 'sub-sub-decks' ||
            currentContent.type === 'sub-sub-sub-decks') &&
            currentContent.data.map((deck) => {
              // Ha ez egy egyedi kártya (isSingleCard), akkor kártyaként rendereljük
              if (deck.isSingleCard && deck.cards && deck.cards.length > 0) {
                const card = deck.cards[0];
                return (
                  <div
                    key={deck.id}
                    className={`magic-card ${selectedCard?.id === card.id ? 'flipped' : ''} ${
                      selectedCard && selectedCard.id !== card.id ? 'background' : ''
                    }`}
                    onClick={() => !selectedCard && openCard(card)}
                  >
                    <div className="magic-card-inner">
                      {/* ELEJE - Front side */}
                      <div className="card-front">
                        <div className="card-arcana">{card.arcana}</div>
                        <div className="card-corner top-left">✦</div>
                        <div className="card-corner top-right">✦</div>
                        <div className="card-corner bottom-left">✦</div>
                        <div className="card-corner bottom-right">✦</div>

                        {card.image ? (
                          <div className="card-image-container">
                            <img src={card.image} alt={getLocalizedText(card, 'title')} className="card-image" />
                          </div>
                        ) : (
                          <div className="card-icon-container">
                            {getIcon(card.icon) ? (
                              <FontAwesomeIcon icon={getIcon(card.icon)} className="card-icon-large" />
                            ) : (
                              <span className="card-icon-large">{card.icon}</span>
                            )}
                          </div>
                        )}

                        <div className="card-divider"></div>

                        <div className="card-content">
                          <h3 className="card-title">{getLocalizedText(card, 'title')}</h3>
                          <p className="card-subtitle">{getLocalizedText(card, 'subtitle')}</p>
                          <p className="card-duration">⏱ {card.duration}</p>
                          {card.price && <p className="card-price">💰 {card.price}</p>}
                        </div>
                      </div>

                      {/* HÁTOLDAL - Back side */}
                      <div className="card-back">
                        <div className="card-arcana">{card.arcana}</div>
                        <div className="card-corner top-left">✦</div>
                        <div className="card-corner top-right">✦</div>
                        <div className="card-corner bottom-left">✦</div>
                        <div className="card-corner bottom-right">✦</div>

                        {/* Bezárás gomb - jobb felül */}
                        <button className="close-btn" onClick={(e) => {
                          e.stopPropagation();
                          closeCard();
                        }}>
                          <FontAwesomeIcon icon={faTimes} />
                        </button>

                        <div className="card-back-content">
                          <h3 className="card-title">{getLocalizedText(card, 'title')}</h3>
                          <p className="card-subtitle">{getLocalizedText(card, 'subtitle')}</p>

                          {card.description && (
                            <div className="card-description-wrapper">
                              <p className="card-description">{getLocalizedText(card, 'description')}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              // Egyébként normál paklként rendereljük
              return (
                <div
                  key={deck.id}
                  className="magic-deck sub-deck"
                  onClick={() => openDeck(deck.id)}
                >
                  <div className="deck-stack">
                    <div className="deck-card deck-back"></div>
                    <div className="deck-card deck-front">
                      <div className="card-arcana">{deck.arcana}</div>
                      <div className="card-corner top-left">✦</div>
                      <div className="card-corner top-right">✦</div>
                      <div className="card-corner bottom-left">✦</div>
                      <div className="card-corner bottom-right">✦</div>

                      <div className="deck-icon-container">
                        {getIcon(deck.icon) ? (
                          <FontAwesomeIcon icon={getIcon(deck.icon)} className="deck-icon" />
                        ) : (
                          <span className="deck-icon">{deck.icon}</span>
                        )}
                      </div>

                      <div className="card-divider"></div>

                      <div className="card-content">
                        <h3 className="card-title">{getDeckName(deck)}</h3>
                        <p className="card-subtitle">{language === 'en' ? deck.name : deck.englishName}</p>
                        {deck.description && (
                          <p className="deck-description">{getLocalizedText(deck, 'description')}</p>
                        )}
                        {deck.directCards ? (
                          <p className="deck-info">{deck.cardCount} {'kártya'}</p>
                        ) : (
                          <>
                            <p className="deck-info">{deck.deckCount || deck.totalCards} {'pakli'}</p>
                            {deck.totalCards && <p className="deck-info">{deck.totalCards} {'kártya'}</p>}
                          </>
                        )}
                      </div>

                      <div className="deck-action">
                        <span className="deck-action-text">
                          {deck.directCards ? 'MEGNYIT' : 'KINYIT'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

          {/* VÉGSŐ KÁRTYÁK */}
          {currentContent.type === 'cards' && currentContent.data.map((card) => (
            <div
              key={card.id}
              className={`magic-card ${selectedCard?.id === card.id ? 'flipped' : ''} ${
                selectedCard && selectedCard.id !== card.id ? 'background' : ''
              }`}
              onClick={() => !selectedCard && openCard(card)}
            >
              <div className="magic-card-inner">
                {/* ELEJE - Front side */}
                <div className="card-front">
                  <div className="card-arcana">{card.arcana}</div>
                  <div className="card-corner top-left">✦</div>
                  <div className="card-corner top-right">✦</div>
                  <div className="card-corner bottom-left">✦</div>
                  <div className="card-corner bottom-right">✦</div>

                  {card.image ? (
                    <div className="card-image-container">
                      <img src={card.image} alt={card.title} className="card-image" />
                    </div>
                  ) : (
                    <div className="card-icon-container">
                      {getIcon(card.icon) ? (
                        <FontAwesomeIcon icon={getIcon(card.icon)} className="card-icon-large" />
                      ) : (
                        <span className="card-icon-large">{card.icon}</span>
                      )}
                    </div>
                  )}

                  <div className="card-divider"></div>

                  <div className="card-content">
                    <h3 className="card-title">{getLocalizedText(card, 'title')}</h3>
                    <p className="card-subtitle">{getLocalizedText(card, 'subtitle')}</p>
                    <p className="card-duration">⏱ {card.duration}</p>
                    {card.price && <p className="card-price">💰 {card.price}</p>}
                  </div>
                </div>

                {/* HÁTOLDAL - Back side */}
                <div className="card-back">
                  <div className="card-arcana">{card.arcana}</div>
                  <div className="card-corner top-left">✦</div>
                  <div className="card-corner top-right">✦</div>
                  <div className="card-corner bottom-left">✦</div>
                  <div className="card-corner bottom-right">✦</div>

                  {/* Bezárás gomb - jobb felül */}
                  <button className="close-btn" onClick={(e) => {
                    e.stopPropagation();
                    closeCard();
                  }}>
                    <FontAwesomeIcon icon={faTimes} />
                  </button>

                  <div className="card-back-content">
                    <h3 className="card-title">{getLocalizedText(card, 'title')}</h3>
                    <p className="card-subtitle">{getLocalizedText(card, 'subtitle')}</p>

                    {card.description && (
                      <div className="card-description-wrapper">
                        <p className="card-description">{getLocalizedText(card, 'description')}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mágikus részecskék a háttérben */}
        {particles.length > 0 && (
          <div className="magic-particles">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="particle"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MagicServiceCards;
