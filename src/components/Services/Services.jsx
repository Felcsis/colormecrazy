import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCut,
  faUserTie,
  faPaintBrush,
  faStar,
  faSpa,
  faChild,
  faCalendarCheck,
  faCheck,
  faGem
} from '@fortawesome/free-solid-svg-icons';
import fodraszatData from '../../data/fodraszat.json';
import mesterFodraszData from '../../data/mester-fodrasz.json';
import kozmetikaData from '../../data/kozmetika.json';
import { useTranslation } from '../../hooks/useTranslation';

// Category icons and images mapping (both HU and EN keys)
const categoryMeta = {
  // Hungarian keys
  'Női Hajvágás': {
    icon: faCut,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80'
  },
  'Férfi Hajvágás': {
    icon: faUserTie,
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80'
  },
  'Festés / Színezés': {
    icon: faPaintBrush,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80'
  },
  'Szőkítés': {
    icon: faStar,
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80'
  },
  'Gyerek Hajvágás': {
    icon: faChild,
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80'
  },
  'Egyéb Szolgáltatások': {
    icon: faSpa,
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&q=80'
  },
  'Speciális Szolgáltatások': {
    icon: faSpa,
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&q=80'
  },
  'Arckezelések': {
    icon: faGem,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80'
  },
  'Szempilla és szemöldök': {
    icon: faGem,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80'
  },
  'Szempilla & Szemöldök': {
    icon: faGem,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80'
  },
  'Gyantázás': {
    icon: faGem,
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80'
  },
  'Smink & Egyéb': {
    icon: faGem,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80'
  },
  // English keys (same metadata)
  "Women's Haircut": {
    icon: faCut,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80'
  },
  "Men's Haircut": {
    icon: faUserTie,
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80'
  },
  "Dyeing / Coloring": {
    icon: faPaintBrush,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80'
  },
  "Bleaching": {
    icon: faStar,
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80'
  },
  "Children's Haircut": {
    icon: faChild,
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80'
  },
  "Other Services": {
    icon: faSpa,
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&q=80'
  },
  "Special Services": {
    icon: faSpa,
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&q=80'
  },
  "Eyelash & Eyebrow": {
    icon: faGem,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80'
  },
  "Waxing": {
    icon: faGem,
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80'
  },
  "Makeup & Other": {
    icon: faGem,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80'
  }
};

// Add icons and images to data, and normalize items/services field
const enhanceData = (data) => {
  return data.map(category => ({
    ...category,
    // Normalize: use 'services' field, but accept both 'items' and 'services'
    services: category.services || category.items || [],
    icon: categoryMeta[category.category]?.icon || faSpa,
    image: categoryMeta[category.category]?.image || 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&q=80'
  }));
};

const priceListData = {
  standard: enhanceData(fodraszatData),
  master: enhanceData(mesterFodraszData),
  kozmetika: enhanceData(kozmetikaData)
};

const Services = () => {
  const [priceList, setPriceList] = useState('master');
  const currentPriceList = priceListData[priceList];
  const { t, language } = useTranslation();

  return (
    <section className="section szolgaltatasok" id="szolgaltatasok">
      <div className="container">
        <div className="price-list-header">
          <h2 className="arlista-title">{t('services.title')}</h2>
          <p className="arlista-subtitle">{t('services.subtitle')}</p>
        </div>

        <div className="price-list-toggle">
          <button
            className={`toggle-btn ${priceList === 'master' ? 'active' : ''}`}
            onClick={() => setPriceList('master')}
          >
            {t('services.masterHairdresser')} <span className="master-badge">{t('services.masterBadge')}</span>
          </button>
          <button
            className={`toggle-btn ${priceList === 'standard' ? 'active' : ''}`}
            onClick={() => setPriceList('standard')}
          >
            {t('services.hairdresser')} <span className="master-badge">{t('services.hairdresserBadge')}</span>
          </button>
          <button
            className={`toggle-btn ${priceList === 'kozmetika' ? 'active' : ''}`}
            onClick={() => setPriceList('kozmetika')}
          >
            {t('services.cosmetics')} <span className="master-badge">{t('services.cosmeticsBadge')}</span>
          </button>
        </div>

        <div className="services-cards-grid">
          {currentPriceList.map((category, catIndex) => {
            const categoryName = language === 'en' && category.category_en ? category.category_en : category.category;
            const categoryNote = language === 'en' && category.note_en ? category.note_en : category.note;

            return (
              <div key={catIndex} className="service-card">
                <div className="service-card-content">
                  <h3 className="service-card-title">{categoryName}</h3>
                  {categoryNote && <p className="service-card-note">{categoryNote}</p>}
                  <div className="service-items">
                    {category.services.map((service, serviceIndex) => {
                      const serviceName = language === 'en' && service.name_en ? service.name_en : service.name;

                      return (
                        <div key={serviceIndex} className="service-item">
                          <span className="service-item-name">{serviceName}</span>
                          <span className="service-item-dots"></span>
                          <span className="service-item-price">{service.price}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
