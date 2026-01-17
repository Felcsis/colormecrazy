import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from '../../hooks/useTranslation';

const Reviews = () => {
  const { t } = useTranslation();

  return (
    <section className="section reviews" id="ertekeles">
      <div className="container">
        <h2 className="section-title">{t('reviews.title')}</h2>

        {/* Google Reviews Section */}
        <div className="google-reviews-section">
          <div className="reviews-header">
            <FontAwesomeIcon icon={faGoogle} className="google-icon" />
            <h3 className="reviews-title">{t('reviews.subtitle')}</h3>
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
              <div className="review-count">20 {t('reviews.reviewCount')}</div>
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
              <p className="review-text">"{t('reviews.review1')}"</p>
              <p className="review-author">{t('reviews.author1')}</p>
            </div>

            <div className="review-card">
              <div className="review-stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p className="review-text">"{t('reviews.review2')}"</p>
              <p className="review-author">{t('reviews.author2')}</p>
            </div>

            <div className="review-card">
              <div className="review-stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p className="review-text">"{t('reviews.review3')}"</p>
              <p className="review-author">{t('reviews.author3')}</p>
            </div>
          </div>

          <a
            href="https://share.google/zDry9GqR8WPbVV83U"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-reviews"
          >
            <FontAwesomeIcon icon={faGoogle} /> {t('reviews.viewAllButton')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
