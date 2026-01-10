import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHatWizard,
  faWandMagicSparkles,
  faSun,
  faGem,
  faCut
} from '@fortawesome/free-solid-svg-icons';
import './TeamMemberDetail.css';

const teamData = {
  felicia: {
    name: 'Felicia',
    role: 'Mester Fodrász',
    description: 'Több mint 15 év tapasztalattal rendelkező mester fodrász. Specialitása a precíz vágástechnikák és a modern színezési eljárások.',
    image: '/images/Felcsi.jpg',
    portfolio: 'felcsi',
    mysticIcon: faHatWizard,
    arcana: 'The Magician'
  },
  gitta: {
    name: 'Gitta',
    role: 'Fodrász',
    description: 'Kreatív fodrász, aki mindig naprakész a legújabb trendekkel. Különösen szeret esküvői frizurákat készíteni.',
    image: '/images/Gitta.jpg',
    portfolio: 'gitta',
    mysticIcon: faSun,
    arcana: 'The Sun'
  },
  lili: {
    name: 'Lili',
    role: 'Fablehair Stylist',
    description: 'Sziasztok! Lili vagyok, a Color Me Crazy szalon egyik fodrásza. 2025 júniusában kezdtem el dolgozni ebben a szakmában, amelyet azért választottam, mert mindig is közel álltak hozzám a hajak, különösen a festés. Már korábban is rengeteg barátnőm haját készítettem el, és hamar éreztem, hogy ezt akár életem végéig is szívesen csinálnám. Azért szeretem a fodrászatot, mert folyamatos fejlődési lehetőséget nyújt, mindig van mit tanulni, így egyáltalán nem válik unalmassá. Hozzám legközelebb a hajfestés áll, ezen belül is a balayage technikák és a szőkítések, hiszen ezekkel igazán gyönyörű eredményeket lehet elérni, legyen szó természetes vagy akár színes árnyalatokról. A jövőben szeretnék minél többet fejlődni, számos képzésen részt venni, és folyamatosan bővíteni a szolgáltatásaimat. Ezek a célok nap mint nap motiválnak arra, hogy egyre jobb legyek a szakmámban. Amikor éppen nem a szalonban dolgozom, szívesen töltöm a szabadidőmet a természetben, szeretek kirándulni, valamint barátokkal kikapcsolódni.',
    image: '/images/Lili.jpg',
    portfolio: 'lili',
    mysticIcon: faWandMagicSparkles,
    arcana: 'The Star'
  },
  anti: {
    name: 'Anti',
    role: 'Fodrász',
    description: 'Én vagyok AnTi. Egész frissen, 2025 tavaszán vizsgáztam, de már 6 évvel ezt megelőzően - amióta szakállt hordok - kezdett érdekelni a szakma. Biztosan állítható, a kedvenc részem a hajvágások A-tól Z-ig. Legyen szó klasszikus, alap, vagy divat hajvágásról. Minden egyes munka újabb lehetőség a további fejlődésre. NINCS ÁTLAGOS NAP. Viszont néha nem árt a pihenés! Ilyenkor jól tud esni egy kis horror, legyen szó, film/sorozat vagy írott formában.',
    image: '/images/Anti.jpg',
    portfolio: 'anti',
    mysticIcon: faCut,
    arcana: 'The Hermit'
  },
  bogi: {
    name: 'Bogi',
    role: 'Kozmetikus',
    description: 'Szép Boglárka vagyok, 2024 óta kozmetikus. A kozmetika világa mindig is érdekelt, ma már pontosan tudom, mennyire fontos a szakértői segítség és a tudatos, személyre szabott bőrápolás. Számomra ez nem csupán munka, hanem hivatás, amelyben nap mint nap segíthetek vendégeimnek abban, hogy jól érezzék magukat a bőrükben. GIGI professzionális kozmetikai termékekkel dolgozom. Hiszem, hogy minden bőr megérdemli a figyelmet, a törődést és azt a nyugodt, feltöltő élményt, amelyet egy professzionális kozmetikai kezelés nyújtani tud.',
    image: '/images/Bogi.JPG',
    portfolio: 'bogi',
    mysticIcon: faGem,
    arcana: 'The Empress'
  }
};

const TeamMemberDetail = () => {
  const { memberId } = useParams();
  const member = teamData[memberId];
  const [portfolioImages, setPortfolioImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (member) {
      // Load portfolio images from generated JSON
      const loadImages = async () => {
        try {
          const response = await fetch('/portfolio-images.json');
          if (response.ok) {
            const allImages = await response.json();
            setPortfolioImages(allImages[member.portfolio] || []);
          }
        } catch (error) {
          console.error('Error loading images:', error);
        } finally {
          setLoading(false);
        }
      };

      loadImages();
    }
  }, [member]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!lightboxOpen) return;

      if (e.key === 'Escape') {
        setLightboxOpen(false);
        document.body.style.overflow = 'auto';
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? portfolioImages.length - 1 : prevIndex - 1
        );
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === portfolioImages.length - 1 ? 0 : prevIndex + 1
        );
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxOpen, portfolioImages.length]);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === portfolioImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? portfolioImages.length - 1 : prevIndex - 1
    );
  };

  if (!member) {
    return (
      <div className="team-detail-error">
        <h2>Csapattag nem található</h2>
        <Link to="/" className="btn btn-primary">Vissza a főoldalra</Link>
      </div>
    );
  }

  return (
    <div className="team-detail">
      <Link to="/#csapat" className="back-button">✦ Vissza a csapathoz</Link>

      <div className="team-detail-hero">
        <div className="team-detail-profile-card">
          <div className="mystic-icon-large">
            <FontAwesomeIcon icon={member.mysticIcon} />
          </div>
          <div className="profile-image-wrapper">
            <img src={member.image} alt={member.name} className="team-detail-image" />
          </div>
          <div className="team-detail-info">
            <h1>{member.name}</h1>
            <span className="team-detail-role">{member.role}</span>
            <div className="arcana-title">{member.arcana}</div>
            <div className="decorative-line"></div>
            <p className="team-detail-description">{member.description}</p>
          </div>
        </div>
      </div>

      <div className="team-detail-portfolio">
        <div className="container">
          <h2 className="portfolio-title">Munkáim</h2>
          {loading ? (
            <div className="portfolio-loading">
              <p>Képek betöltése...</p>
            </div>
          ) : portfolioImages.length > 0 ? (
            <div className="portfolio-grid">
              {portfolioImages.map((image, index) => (
                <div
                  key={index}
                  className="portfolio-item"
                  data-index={index}
                  onClick={() => openLightbox(index)}
                >
                  <div className="image-frame">
                    <img src={image} alt={`${member.name} munkája ${index + 1}`} loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="portfolio-note">
              <p>Hamarosan töltenek fel munkákat!</p>
            </div>
          )}
        </div>
      </div>

      {/* Magical Lightbox */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            ✕
          </button>
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); handlePrevious(); }}>
            ‹
          </button>
          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); handleNext(); }}>
            ›
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-card">
              <div className="lightbox-stars">
                <span className="star star-1">✦</span>
                <span className="star star-2">✦</span>
                <span className="star star-3">✦</span>
                <span className="star star-4">✦</span>
              </div>
              <img
                src={portfolioImages[currentImageIndex]}
                alt={`${member.name} munkája ${currentImageIndex + 1}`}
                className="lightbox-image"
              />
              <div className="lightbox-counter">
                {currentImageIndex + 1} / {portfolioImages.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMemberDetail;
