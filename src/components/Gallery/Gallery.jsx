import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Gallery.css';

// Galéria képek listája
const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/att.QjFUqsWq6i1tB1PD3s8VpnL6nJf14GotMpDtyDKQsBM.webp',
    alt: 'Galéria kép 1',
    category: 'hair'
  },
  {
    id: 2,
    src: '/images/gallery/DSC_7547.webp',
    alt: 'Galéria kép 2',
    category: 'hair'
  },
  {
    id: 3,
    src: '/images/gallery/Felcsi.webp',
    alt: 'Galéria kép 3',
    category: 'hair'
  },
  {
    id: 4,
    src: '/images/gallery/49395788_2045422469089798_6455487131816034304_n.webp',
    alt: 'Galéria kép 4',
    category: 'hair'
  },
  {
    id: 5,
    src: '/images/gallery/DSC_7527.webp',
    alt: 'Galéria kép 5',
    category: 'hair'
  },
  {
    id: 6,
    src: '/images/gallery/Anti1.webp',
    alt: 'Galéria kép 6',
    category: 'hair'
  },
  {
    id: 7,
    src: '/images/gallery/Anti3.webp',
    alt: 'Galéria kép 7',
    category: 'hair'
  },
  {
    id: 8,
    src: '/images/gallery/DSC_7469-Enhanced-NR.webp',
    alt: 'Galéria kép 8',
    category: 'hair'
  },
  {
    id: 9,
    src: '/images/gallery/Bogi.webp',
    alt: 'Galéria kép 9',
    category: 'hair'
  },
  {
    id: 10,
    src: '/images/gallery/Anti.webp',
    alt: 'Galéria kép 10',
    category: 'hair'
  },
  {
    id: 11,
    src: '/images/gallery/Bogi3.webp',
    alt: 'Galéria kép 11',
    category: 'hair'
  },
  {
    id: 12,
    src: '/images/gallery/DSC_7519.webp',
    alt: 'Galéria kép 12',
    category: 'hair'
  },
  {
    id: 13,
    src: '/images/gallery/DSC_7523.webp',
    alt: 'Galéria kép 13',
    category: 'hair'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState({});

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!lightboxOpen) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxOpen, currentImageIndex]);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleNext = () => {
    const newIndex = currentImageIndex === galleryImages.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const handlePrevious = () => {
    const newIndex = currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const handleImageLoad = (id) => {
    setImageLoaded(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="section galeria" id="galeria">
      <div className="container">
        <h2 className="section-title">Galéria</h2>
        <p className="section-subtitle">Munkáinkból</p>

        {galleryImages.length === 0 ? (
          // Placeholder ha még nincsenek képek
          <div className="gallery-grid">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="gallery-item">
                <div className="gallery-placeholder">
                  <FontAwesomeIcon icon={faCamera} />
                  <span>Kép {item}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Valódi képek megjelenítése
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="gallery-item gallery-item-image"
                onClick={() => openLightbox(image, index)}
              >
                {/* Lazy loading placeholder */}
                {!imageLoaded[image.id] && (
                  <div className="gallery-image-loader">
                    <FontAwesomeIcon icon={faCamera} />
                  </div>
                )}

                {/* Kép lazy loading-gal */}
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  onLoad={() => handleImageLoad(image.id)}
                  className={imageLoaded[image.id] ? 'loaded' : ''}
                />

                {/* Számozás overlay-en */}
                <div className="gallery-overlay">
                  <span className="gallery-number">#{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Magical Lightbox */}
      {lightboxOpen && selectedImage && (
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
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="lightbox-image"
              />
              <div className="lightbox-counter">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
