import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCut,
  faUserTie,
  faPaintBrush,
  faStar,
  faSpa,
  faChild
} from '@fortawesome/free-solid-svg-icons';

const priceListData = {
  standard: [
    {
      category: 'Női Hajvágás',
      icon: faCut,
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
      services: [
        { name: 'Fejmasszázs', price: '1 500 Ft' },
        { name: 'Steampod szolgáltatás', price: '4 500 Ft + mosás' },
        { name: 'Hajgöndörítés/Vasalás', price: '3 000 Ft' },
        { name: 'Alkalmi kontyok, frizurák', price: '8 000 Ft-tól' }
      ]
    }
  ],
  master: [
    {
      category: 'Női Hajvágás',
      icon: faCut,
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
      services: [
        { name: 'Fejmasszázs', price: '1 500 Ft' },
        { name: 'Raszta készítés és javítás', price: '6 000 Ft/óra' },
        { name: 'Műraszta felfonás', price: '6 000 Ft/óra' },
        { name: 'Hajtetoválás', price: '3 000 Ft/minta' },
        { name: 'Steampod szolgáltatás', price: '4 500 Ft + mosás' },
        { name: 'Hajgöndörítés/Vasalás', price: '3 000 Ft' },
        { name: 'Alkalmi kontyok, frizurák', price: '10 000 Ft-tól' }
      ]
    }
  ]
};

const Services = () => {
  const [priceList, setPriceList] = useState('standard');
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  const currentPriceList = priceListData[priceList];

  return (
    <section className="section szolgaltatasok" id="szolgaltatasok">
      <div className="container">
        <h2 className="section-title">Szolgáltatások & Árlista</h2>

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
        </div>

        <div className="services-list">
          {currentPriceList.map((category, index) => (
            <div key={index} className="service-category">
              <div
                className="service-category-header"
                onClick={() => toggleCategory(index)}
              >
                <div className="service-category-title">
                  <FontAwesomeIcon icon={category.icon} className="service-icon" />
                  <h3>{category.category}</h3>
                  {category.note && <span className="service-note">{category.note}</span>}
                </div>
                <span className={`service-toggle ${expandedCategory === index ? 'expanded' : ''}`}>
                  {expandedCategory === index ? '−' : '+'}
                </span>
              </div>
              <div className={`service-items ${expandedCategory === index ? 'expanded' : ''}`}>
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="service-item">
                    <span className="service-name">{service.name}</span>
                    <span className="service-dots"></span>
                    <span className="service-price">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
