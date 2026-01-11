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

const priceListData = {
  standard: [
    {
      category: 'Női Hajvágás',
      icon: faCut,
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
      services: [
        { name: 'Rövid', price: '6 500 Ft' },
        { name: 'Félhosszú', price: '8 000 Ft' },
        { name: 'Hosszú', price: '9 000 Ft' },
        { name: 'Extra hosszú', price: '10 000 Ft' },
        { name: 'Száraz hajvágás', price: '4 000 Ft' }
      ]
    },
    {
      category: 'Férfi Hajvágás',
      icon: faUserTie,
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80',
      services: [
        { name: 'Rövid hajvágás', price: '4 200 Ft' },
        { name: 'Közép hosszú', price: '5 000 Ft' },
        { name: 'Férfi hosszú', price: '5 500 Ft' },
        { name: 'Csak géppel', price: '3 500 Ft' },
        { name: 'Szakáll igazítás', price: '2 800 Ft' },
        { name: 'Mosás', price: '1 500 Ft' }
      ]
    },
    {
      category: 'Festés / Színezés',
      icon: faPaintBrush,
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
      note: '+ felhasznált anyag',
      services: [
        { name: 'Rövid', price: '6 500 Ft' },
        { name: 'Félhosszú', price: '8 000 Ft' },
        { name: 'Hosszú', price: '9 000 Ft' },
        { name: 'Extra hosszú', price: '10 000 Ft' }
      ]
    },
    {
      category: 'Szőkítés',
      icon: faStar,
      image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80',
      note: '+ felhasznált anyag',
      services: [
        { name: 'Tő szőkítés', price: '9 000 Ft' },
        { name: 'Teljes szőkítés', price: '12 000 Ft' },
        { name: 'Balayage', price: '12 000 Ft' },
        { name: 'Melír', price: '4 000 Ft / óra' },
        { name: 'Korrekció', price: '3 000 Ft / óra' },
        { name: 'Tartós festék', price: '90 Ft/g' },
        { name: 'Féltartós színező', price: '90 Ft/g' },
        { name: 'Fizikai színező', price: '90 Ft/g' },
        { name: 'Toner', price: '110 Ft/g' },
        { name: 'Szőkítő', price: '80 Ft/g' },
        { name: 'Kötés erősítő szőkítő', price: '90 Ft/g' },
        { name: 'Pigment eltávolító', price: '5 000 Ft/csomag' }
      ]
    },
    {
      category: 'Egyéb Szolgáltatások',
      icon: faSpa,
      image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&q=80',
      services: [
        { name: 'Fejmasszázs', price: '1 500 Ft' },
        { name: 'Steampod szolgáltatás', price: '4 500 Ft + mosás' },
        { name: 'Hajgöndörítés/Vasalás', price: '3 000 Ft' },
        { name: 'Joico hajkezelés', price: '14 000 Ft' },
        { name: 'Alkalmi kontyok, frizurák', price: '8 000 Ft-tól' }
      ]
    }
  ],
  master: [
    {
      category: 'Női Hajvágás',
      icon: faCut,
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
      services: [
        { name: 'Rövid', price: '9 500 Ft' },
        { name: 'Félhosszú', price: '11 000 Ft' },
        { name: 'Hosszú', price: '13 000 Ft' },
        { name: 'Extra hosszú', price: '14 500 Ft' },
        { name: 'Száraz hajvágás', price: '5 000 Ft' }
      ]
    },
    {
      category: 'Férfi Hajvágás',
      icon: faUserTie,
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80',
      services: [
        { name: 'Rövid hajvágás', price: '5 200 Ft' },
        { name: 'Közép hosszú', price: '6 000 Ft' },
        { name: 'Férfi hosszú', price: '7 500 Ft' },
        { name: 'Csak géppel', price: '4 200 Ft' },
        { name: 'Szakáll igazítás', price: '2 800 Ft' },
        { name: 'Mosás', price: '1 500 Ft' }
      ]
    },
    {
      category: 'Gyermek Hajvágás',
      icon: faChild,
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
      note: '0-14 éves korig',
      services: [
        { name: 'Kis fiú hajvágás', price: '4 500 Ft' },
        { name: 'Kis lány hajvágás', price: '5 000 Ft' },
        { name: 'Mosás', price: '1 500 Ft' }
      ]
    },
    {
      category: 'Festés / Színezés',
      icon: faPaintBrush,
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
      note: '+ felhasznált anyag',
      services: [
        { name: 'Rövid', price: '9 500 Ft' },
        { name: 'Félhosszú', price: '10 000 Ft' },
        { name: 'Hosszú', price: '11 500 Ft' },
        { name: 'Extra hosszú', price: '12 500 Ft' }
      ]
    },
    {
      category: 'Szőkítés',
      icon: faStar,
      image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80',
      note: '+ felhasznált anyag',
      services: [
        { name: 'Tő szőkítés', price: '13 000 Ft' },
        { name: 'Teljes szőkítés', price: '15 000 Ft' },
        { name: 'Balayage', price: '18 000 Ft' },
        { name: 'Melír', price: '6 000 Ft / óra' },
        { name: 'Korrekció', price: '7 000 Ft / óra' },
        { name: 'Tartós festék', price: '90 Ft/g' },
        { name: 'Féltartós színező', price: '90 Ft/g' },
        { name: 'Fizikai színező', price: '90 Ft/g' },
        { name: 'Toner', price: '110 Ft/g' },
        { name: 'Szőkítő', price: '80 Ft/g' },
        { name: 'Kötés erősítő szőkítő', price: '90 Ft/g' },
        { name: 'Pigment eltávolító', price: '5 000 Ft/csomag' }
      ]
    },
    {
      category: 'Speciális Szolgáltatások',
      icon: faSpa,
      image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&q=80',
      services: [
        { name: 'Fejmasszázs', price: '1 500 Ft' },
        { name: 'Raszta készítés és javítás', price: '6 000 Ft/óra' },
        { name: 'Műraszta felfonás', price: '6 000 Ft/óra' },
        { name: 'Hajtetoválás', price: '3 000 Ft/minta' },
        { name: 'Steampod szolgáltatás', price: '4 500 Ft + mosás' },
        { name: 'Hajgöndörítés/Vasalás', price: '3 000 Ft' },
        { name: 'Joico hajkezelés', price: '14 000 Ft' },
        { name: 'Alkalmi kontyok, frizurák', price: '10 000 Ft-tól' }
      ]
    }
  ],
  kozmetika: [
    {
      category: 'Szempilla & Szemöldök',
      icon: faGem,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
      services: [
        { name: 'Szempilla festés', price: '2 500 Ft' },
        { name: 'Szemöldök festés + igazítás', price: '3 500 Ft' },
        { name: 'Szempilla lifting', price: '9 500 Ft' },
        { name: 'Hennás szemöldök styling', price: '6 500 Ft' }
      ]
    },
    {
      category: 'Gyantázás',
      icon: faGem,
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80',
      note: 'Cukorpasztával is (+700 Ft)',
      services: [
        { name: 'Bajusz', price: '1 800 Ft' },
        { name: 'Szemöldök', price: '1 800 Ft' },
        { name: 'Hónalj', price: '2 600 Ft' },
        { name: 'Teljeskar', price: '3 500 Ft' },
        { name: 'Bikini vonal', price: '3 000 Ft' },
        { name: 'Láb térdig', price: '3 000 Ft' },
        { name: 'Teljes láb', price: '5 000 Ft' },
        { name: 'Hát', price: '3 000 Ft' },
        { name: 'Mellkas', price: '3 000 Ft' },
        { name: 'Teljes fazon', price: '6 500 Ft' }
      ]
    },
    {
      category: 'Smink & Egyéb',
      icon: faGem,
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80',
      services: [
        { name: 'Alkalmi smink', price: '11 000 Ft' },
        { name: 'Menyasszonyi smink', price: '16 000 Ft' },
        { name: 'STUDEX fülbelövés', price: '15 000 Ft' }
      ]
    }
  ]
};

const Services = () => {
  const [priceList, setPriceList] = useState('standard');
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
            className={`toggle-btn ${priceList === 'standard' ? 'active' : ''}`}
            onClick={() => setPriceList('standard')}
          >
            Fodrász
          </button>
          <button
            className={`toggle-btn ${priceList === 'master' ? 'active' : ''}`}
            onClick={() => setPriceList('master')}
          >
            Mester Fodrász <span className="master-badge">(Felicia)</span>
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
              <div className="service-card-image">
                <img src={category.image} alt={category.category} />
                <div className="service-card-overlay">
                  <FontAwesomeIcon icon={category.icon} className="service-card-icon" />
                </div>
              </div>
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
