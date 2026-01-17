import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHatWizard,
  faWandMagicSparkles,
  faSun,
  faGem,
  faCut,
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';
import './TeamMemberDetail.css';
import { useTranslation } from '../../hooks/useTranslation';

// Team members metadata (images, icons, contact info) - language-independent data
const teamMembersConfig = {
  felicia: {
    image: '/images/Felcsi.webp',
    portfolio: 'felcsi',
    mysticIcon: faHatWizard
  },
  gitta: {
    image: '/images/Gitta.webp',
    portfolio: 'gitta',
    mysticIcon: faSun,
    contact: {
      phone: '+36 30 991 7641',
      instagram: 'haircraftbygitta',
      instagramUrl: 'https://www.instagram.com/haircraftbygitta/',
      facebook: 'Gitta HairCraft by Color Me Crazy',
      facebookUrl: 'https://www.facebook.com/profile.php?id=61577343102077'
    }
  },
  lili: {
    image: '/images/Lili.webp',
    portfolio: 'lili',
    mysticIcon: faWandMagicSparkles,
    contact: {
      phone: '+36 20 594 2014',
      instagram: 'lilofablehair_by_colormecrazy',
      instagramUrl: 'https://www.instagram.com/lilofablehair_by_colormecrazy/',
      facebook: 'lilo fablehair by color me crazy',
      facebookUrl: 'https://www.facebook.com/profile.php?id=61577565787905'
    }
  },
  anti: {
    image: '/images/Anti.webp',
    portfolio: 'anti',
    mysticIcon: faCut,
    contact: {
      phone: '+36 20 923 7975',
      instagram: 'cmc.anti',
      instagramUrl: 'https://www.instagram.com/cmc.anti',
      facebook: 'AnTi // Color Me Crazy',
      facebookUrl: 'https://www.facebook.com/share/1Yqa2MrzD4/'
    }
  },
  bogi: {
    image: '/images/Bogi.webp',
    portfolio: 'bogi',
    mysticIcon: faGem
  }
};

const TeamMemberDetail = () => {
  const { memberId } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const memberConfig = teamMembersConfig[memberId];
  const [portfolioImages, setPortfolioImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get member data from translations
  const member = memberConfig ? {
    ...memberConfig,
    name: t(`team.members.${memberId}.name`),
    role: t(`team.members.${memberId}.role`),
    arcana: t(`team.members.${memberId}.arcana`),
    description: t(`team.members.${memberId}.description`)
  } : null;

  // Handle back to team section
  const handleBackClick = (e) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const teamSection = document.getElementById('csapat');
      if (teamSection) {
        teamSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Scroll to top when component mounts or member changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [memberId]);

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
        <h2>{t('teamMemberDetail.notFound')}</h2>
        <Link to="/" className="btn btn-primary">{t('teamMemberDetail.backToHome')}</Link>
      </div>
    );
  }

  return (
    <div className="team-detail">
      <Link to="/" onClick={handleBackClick} className="back-button">✦ {t('teamMemberDetail.backToTeam')}</Link>

      <div className="team-detail-hero">
        <div className="team-detail-profile-card">
          <div className="profile-left">
            <div className="mystic-icon-large">
              <FontAwesomeIcon icon={member.mysticIcon} />
            </div>
            <div className="profile-image-wrapper">
              <img src={member.image} alt={member.name} className="team-detail-image" />
            </div>
            <h1 className="member-name">{member.name}</h1>
            <span className="team-detail-role">{member.role}</span>
            <div className="arcana-title">{member.arcana}</div>

            {member.contact && (
              <div className="social-media-links">
                {member.contact.phone && (
                  <a href={`tel:${member.contact.phone}`} className="social-icon phone" title="Telefon">
                    <FontAwesomeIcon icon={faPhone} />
                  </a>
                )}
                {member.contact.instagramUrl && (
                  <a href={member.contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="social-icon instagram" title="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                )}
                {member.contact.facebookUrl && (
                  <a href={member.contact.facebookUrl} target="_blank" rel="noopener noreferrer" className="social-icon facebook" title="Facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                )}
              </div>
            )}
          </div>
          <div className="profile-right">
            <div className="decorative-line"></div>
            <div className="team-detail-description">
              {member.description.split('. ').filter(sentence => sentence.trim()).map((sentence, index) => (
                <p key={index}>{sentence.trim()}{sentence.endsWith('.') ? '' : '.'}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="team-detail-portfolio">
        <div className="container">
          <h2 className="portfolio-title">{t('teamMemberDetail.portfolio')}</h2>
          {loading ? (
            <div className="portfolio-loading">
              <p>{t('teamMemberDetail.loadingImages')}</p>
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
                    <img src={image} alt={`${member.name} ${t('teamMemberDetail.work')} ${index + 1}`} loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="portfolio-note">
              <p>{t('teamMemberDetail.comingSoon')}</p>
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
                alt={`${member.name} ${t('teamMemberDetail.work')} ${currentImageIndex + 1}`}
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
