import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const galleryItems = [
  { title: 'Frizura 1' },
  { title: 'Frizura 2' },
  { title: 'Frizura 3' },
  { title: 'Kozmetika 1' },
  { title: 'Frizura 4' },
  { title: 'Kozmetika 2' }
];

const Gallery = () => {
  return (
    <section className="section galeria" id="galeria">
      <div className="container">
        <h2 className="section-title">Galéria</h2>
        <p className="section-subtitle">Munkáinkból</p>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item">
              <div className="gallery-placeholder">
                <FontAwesomeIcon icon={faCamera} /> {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
