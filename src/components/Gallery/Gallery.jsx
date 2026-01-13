import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Gallery.css';

// Galéria képek listája
const galleryImages = [
  // Itt fognak megjelenni a képek, amikor feltöltöd őket
  // Formátum: { id: 1, src: '/images/gallery/kep1.webp', alt: 'Leírás', category: 'hair' }
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
