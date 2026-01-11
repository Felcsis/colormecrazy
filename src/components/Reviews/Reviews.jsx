import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Reviews = () => {
  return (
    <section className="section reviews" id="ertekeles">
      <div className="container">
        <h2 className="section-title">Értékelések</h2>

        {/* Google Reviews Section */}
        <div className="google-reviews-section">
          <div className="reviews-header">
            <FontAwesomeIcon icon={faGoogle} className="google-icon" />
            <h3 className="reviews-title">Vendégeink Véleménye</h3>
          </div>

          <div className="reviews-stats">
            <div className="rating-display">
              <div className="rating-number">4.8</div>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="review-count">100+ Google értékelés</div>
            </div>
          </div>

          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p className="review-text">"Fantasztikus hely! Felicia csodát művelt a hajammal. Profi, kedves kiszolgálás."</p>
              <p className="review-author">— Anna M.</p>
            </div>

            <div className="review-card">
              <div className="review-stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p className="review-text">"Kreatív csapat, egyedi atmoszféra. Mindig elégedetten távozom!"</p>
              <p className="review-author">— Petra K.</p>
            </div>

            <div className="review-card">
              <div className="review-stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p className="review-text">"Legjobb fodrászat a környéken! Minden alkalommal kiváló munka és jó hangulat."</p>
              <p className="review-author">— Zsolt B.</p>
            </div>
          </div>

          <a
            href="https://share.google/zDry9GqR8WPbVV83U"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-reviews"
          >
            <FontAwesomeIcon icon={faGoogle} /> Összes értékelés megtekintése
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
