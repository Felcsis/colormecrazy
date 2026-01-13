import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Gallery.css';

// Galéria képek listája
const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/att.QjFUqsWq6i1tB1PD3s8VpnL6nJf14GotMpDtyDKQsBM.webp',
    alt: 'att.QjFUqsWq6i1tB1PD3s8VpnL6nJf14GotMpDtyDKQsBM',
    category: 'hair'
  },
  {
    id: 2,
    src: '/images/gallery/DSC_7547.webp',
    alt: 'DSC 7547',
    category: 'hair'
  },
  {
    id: 3,
    src: '/images/gallery/Felcsi.webp',
    alt: 'Felcsi',
    category: 'hair'
  },
  {
    id: 4,
    src: '/images/gallery/49395788_2045422469089798_6455487131816034304_n.webp',
    alt: '49395788 2045422469089798 6455487131816034304 n',
    category: 'hair'
  },
  {
    id: 5,
    src: '/images/gallery/DSC_7527.webp',
    alt: 'DSC 7527',
    category: 'hair'
  },
  {
    id: 6,
    src: '/images/gallery/Anti1.webp',
    alt: 'Anti1',
    category: 'hair'
  },
  {
    id: 7,
    src: '/images/gallery/Anti3.webp',
    alt: 'Anti3',
    category: 'hair'
  },
  {
    id: 8,
    src: '/images/gallery/DSC_7469-Enhanced-NR.webp',
    alt: 'DSC 7469 Enhanced NR',
    category: 'hair'
  },
  {
    id: 9,
    src: '/images/gallery/Bogi.webp',
    alt: 'Bogi',
    category: 'hair'
  },
  {
    id: 10,
    src: '/images/gallery/Anti.webp',
    alt: 'Anti',
    category: 'hair'
  },
  {
    id: 11,
    src: '/images/gallery/Gitta.webp',
    alt: 'Gitta',
    category: 'hair'
  },
  {
    id: 12,
    src: '/images/gallery/Bogi3.webp',
    alt: 'Bogi3',
    category: 'hair'
  },
  {
    id: 13,
    src: '/images/gallery/Lili.webp',
    alt: 'Lili',
    category: 'hair'
  },
  {
    id: 14,
    src: '/images/gallery/DSC_7519.webp',
    alt: 'DSC 7519',
    category: 'hair'
  },
  {
    id: 15,
    src: '/images/gallery/DSC_7523.webp',
    alt: 'DSC 7523',
    category: 'hair'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLoaded, setImageLoaded] = useState({});

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
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
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="gallery-item gallery-item-image"
                onClick={() => openLightbox(image)}
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

                {/* Hover overlay */}
                <div className="gallery-overlay">
                  <span>Megtekintés</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox modal */}
      {selectedImage && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            {selectedImage.alt && (
              <p className="lightbox-caption">{selectedImage.alt}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
