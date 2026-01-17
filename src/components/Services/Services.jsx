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

// Category icons and images mapping
const categoryMeta = {
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
  'Gyermek Hajvágás': {
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

  return (
    <section className="section szolgaltatasok" id="szolgaltatasok">
      <div className="container">
        <div className="price-list-header">
          <h2 className="arlista-title">ÁRLISTA</h2>
          <p className="arlista-subtitle">Válogass szolgáltatásaink közül</p>
        </div>

        <div className="price-list-toggle">
          <button
            className={`toggle-btn ${priceList === 'master' ? 'active' : ''}`}
            onClick={() => setPriceList('master')}
          >
            Mester Fodrász <span className="master-badge">(Felicia)</span>
          </button>
          <button
            className={`toggle-btn ${priceList === 'standard' ? 'active' : ''}`}
            onClick={() => setPriceList('standard')}
          >
            Fodrász <span className="master-badge">(Gitta, Lili, Anti)</span>
          </button>
          <button
            className={`toggle-btn ${priceList === 'kozmetika' ? 'active' : ''}`}
            onClick={() => setPriceList('kozmetika')}
          >
            Kozmetika <span className="master-badge">(Bogi)</span>
          </button>
        </div>

        <div className="services-cards-grid">
          {currentPriceList.map((category, catIndex) => (
            <div key={catIndex} className="service-card">
              <div className="service-card-content">
                <h3 className="service-card-title">{category.category}</h3>
                {category.note && <p className="service-card-note">{category.note}</p>}
                <div className="service-items">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="service-item">
                      <span className="service-item-name">{service.name}</span>
                      <span className="service-item-dots"></span>
                      <span className="service-item-price">{service.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
