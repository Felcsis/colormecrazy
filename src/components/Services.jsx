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
        { name: 'Joico hajkezelés', price: '14 000 Ft' },
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
        { name: 'Joico hajkezelés', price: '14 000 Ft' },
        { name: 'Alkalmi kontyok, frizurák', price: '10 000 Ft-tól' }
      ]
    }
  ],
  kozmetika: [
    {
      category: 'Szempilla & Szemöldök',
      icon: faGem,
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

        <div className="price-list-content">
          <div className="price-list-columns">
            {currentPriceList.map((category, catIndex) => (
              <div key={catIndex} className="price-column-section">
                <h3 className="category-title">
                  {category.category}
                  {category.note && <span className="category-subtitle">{category.note}</span>}
                </h3>
                <div className="service-list">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="service-row">
                      <span className="service-name-simple">{service.name}</span>
                      <span className="service-price-simple">{service.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
