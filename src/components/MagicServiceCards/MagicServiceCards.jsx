import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faCoins,
  faHome,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';
import { servicesData, findDeckById } from '../../data/servicesData';
import './MagicServiceCards.css';

const MagicServiceCards = () => {
  const [navigationPath, setNavigationPath] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [particles, setParticles] = useState([]);

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
    const crumbs = [{ id: 'home', name: 'Főoldal', icon: '🏠' }];

    navigationPath.forEach((deckId) => {
      const deck = findDeckById(deckId);
      if (deck) {
        crumbs.push({
          id: deck.id,
          name: deck.name,
          icon: deck.icon
        });
      }
    });

    return crumbs;
  };

  const currentContent = getCurrentContent();
  const breadcrumb = getBreadcrumb();

  return (
    <section className="magic-services-section" id="magic-services">
      <div className="container">
        {/* Header + Breadcrumb */}
        <div className="magic-services-header">
          <h2 className="magic-title">Varázslatos Szolgáltatásaink</h2>

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
                    {crumb.icon} {crumb.name}
                  </button>
                </React.Fragment>
              ))}
            </div>
          ) : (
            <p className="magic-subtitle">Húzz egy paklit a varázsláshoz</p>
          )}

          {/* Vissza gombok */}
          {navigationPath.length > 0 && (
            <div className="navigation-buttons">
              <button className="nav-btn back-btn" onClick={goBack}>
                <FontAwesomeIcon icon={faChevronLeft} /> Vissza
              </button>
              {navigationPath.length > 1 && (
                <button className="nav-btn home-btn" onClick={goHome}>
                  <FontAwesomeIcon icon={faHome} /> Főoldal
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
                    <span className="deck-icon">{mainDeck.icon}</span>
                  </div>

                  <div className="card-divider"></div>

                  <div className="card-content">
                    <h3 className="card-title">{mainDeck.name}</h3>
                    <p className="card-subtitle">{mainDeck.englishName}</p>
                    <p className="deck-info">{mainDeck.deckCount} pakli</p>
                    <p className="deck-info">{mainDeck.totalCards} kártya</p>
                  </div>

                  <div className="deck-action">
                    <span className="deck-action-text">HÚZD KI</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* AL-PAKLIK, AL-AL-PAKLIK, AL-AL-AL-PAKLIK */}
          {(currentContent.type === 'sub-decks' ||
            currentContent.type === 'sub-sub-decks' ||
            currentContent.type === 'sub-sub-sub-decks') &&
            currentContent.data.map((deck) => (
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
                    <span className="deck-icon">{deck.icon}</span>
                  </div>

                  <div className="card-divider"></div>

                  <div className="card-content">
                    <h3 className="card-title">{deck.name}</h3>
                    <p className="card-subtitle">{deck.englishName}</p>
                    {deck.description && (
                      <p className="deck-description">{deck.description}</p>
                    )}
                    {deck.directCards ? (
                      <p className="deck-info">{deck.cardCount} kártya</p>
                    ) : (
                      <>
                        <p className="deck-info">{deck.deckCount || deck.totalCards} pakli</p>
                        {deck.totalCards && <p className="deck-info">{deck.totalCards} kártya</p>}
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
          ))}

          {/* VÉGSŐ KÁRTYÁK */}
          {currentContent.type === 'cards' && currentContent.data.map((card) => (
            <div
              key={card.id}
              className={`magic-card ${selectedCard?.id === card.id ? 'active' : ''} ${
                selectedCard && selectedCard.id !== card.id ? 'background' : ''
              }`}
              onClick={() => !selectedCard && openCard(card)}
            >
              <div className="magic-card-inner">
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
                    <span className="card-icon-large">{card.icon}</span>
                  </div>
                )}

                <div className="card-divider"></div>

                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-subtitle">{card.subtitle}</p>
                  <p className="card-duration">⏱ {card.duration}</p>
                  {card.price && <p className="card-price">💰 {card.price}</p>}
                </div>

                {/* Kártya részletek amikor ki van nyitva */}
                {selectedCard?.id === card.id && (
                  <div className="card-details">
                    <button className="close-btn" onClick={(e) => {
                      e.stopPropagation();
                      closeCard();
                    }}>
                      <FontAwesomeIcon icon={faTimes} />
                    </button>

                    {card.description && (
                      <p className="card-description">{card.description}</p>
                    )}

                    {card.steps && card.steps.length > 0 && (
                      <>
                        <h4 className="details-title">Lépések:</h4>
                        <ol className="steps-list">
                          {card.steps.map((step, index) => (
                            <li key={index}>{step}</li>
                          ))}
                        </ol>
                      </>
                    )}

                    <button className="price-btn" onClick={(e) => {
                      e.stopPropagation();
                      scrollToPriceList();
                    }}>
                      <FontAwesomeIcon icon={faCoins} /> Árlista megtekintése
                    </button>
                  </div>
                )}
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
