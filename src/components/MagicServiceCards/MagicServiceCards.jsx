import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaintBrush,
  faCalendarAlt,
  faTimes,
  faCoins
} from '@fortawesome/free-solid-svg-icons';
import './MagicServiceCards.css';

const servicesData = [
  {
    id: 'allover',
    title: 'Egyszínű festés',
    subtitle: 'All Over Color',
    image: '/images/services/allover.webp',
    duration: '2 óra',
    arcana: 'I',
    steps: [
      'Konzultáció a kívánt színről',
      'Haj előkészítése és védelem',
      'Festék egyenletes felvitele',
      'Behatási idő',
      'Kimosás és ápolás',
      'Szárítás és formázás'
    ]
  },
  {
    id: 'balayage',
    title: 'Balayage',
    subtitle: 'Kézzel festett melírozás',
    image: '/images/services/balayage.webp',
    duration: '4 óra',
    arcana: 'II',
    steps: [
      'Hajszín elemzése',
      'Egyedi technika megtervezése',
      'Kézzel festett melír felvitele',
      'Természetes átmenetek kialakítása',
      'Tónerezés',
      'Ápolás és styling'
    ]
  },
  {
    id: 'bleaching',
    title: 'Szőkítés és árnyalás',
    subtitle: 'Bleaching & Toning',
    image: '/images/services/bleaching.webp',
    duration: '3 óra',
    arcana: 'III',
    steps: [
      'Hajállapot felmérése',
      'Szőkítő felvitele',
      'Folyamat monitorozása',
      'Sárgás árnyalat semlegesítése',
      'Tóner alkalmazása',
      'Intenzív hajápolás'
    ]
  },
  {
    id: 'correction',
    title: 'Színkorrekció',
    subtitle: 'Color Correction',
    image: '/images/services/correction.webp',
    duration: '5 óra',
    arcana: 'IV',
    steps: [
      'Részletes hajszín-analízis',
      'Korrekciós terv készítése',
      'Nem kívánt pigmentek eltávolítása',
      'Fokozatos színkorrekció',
      'Tónerezés és kiegyenlítés',
      'Speciális ápolási protokoll'
    ]
  },
  {
    id: 'consultation',
    title: 'Konzultáció',
    subtitle: 'Consultation',
    duration: '30 perc • Ingyenes',
    arcana: 'V',
    steps: [
      'Hajtípus meghatározása',
      'Hajállapot felmérése',
      'Kívánt végeredmény megbeszélése',
      'Technika kiválasztása',
      'Időbeosztás tervezése',
      'Árajánlat készítése'
    ]
  },
  {
    id: 'vivid',
    title: 'Dupla folyamat',
    subtitle: 'Vivid Color Process',
    image: '/images/services/vivid.webp',
    duration: '5 óra 30 perc',
    arcana: 'VI',
    steps: [
      'Haj előkészítése',
      'Teljes szőkítés világosszőke alapra',
      'Tisztítás és szárítás',
      'Élénk szín felvitele',
      'Hosszú behatási idő',
      'Színrögzítés és ápolás'
    ]
  },
  {
    id: 'fullfoil',
    title: 'Teljes melír fóliával',
    subtitle: 'Full Foil Highlights',
    image: '/images/services/fullfoil.webp',
    duration: '4 óra',
    arcana: 'VII',
    steps: [
      'Hajfelosztás szekciókra',
      'Fóliázási technika alkalmazása',
      'Teljes fej melírozása',
      'Egyenletes szín elérése',
      'Árnyalás tónerrel',
      'Dimenzió és mélység kialakítása'
    ]
  },
  {
    id: 'partialfoil',
    title: 'Részleges melír',
    subtitle: 'Partial Foil',
    image: '/images/services/partialfoil.webp',
    duration: '3 óra 30 perc',
    arcana: 'VIII',
    steps: [
      'Stratégiai zónák kijelölése',
      'Fejtető és oldalsó részek melírozása',
      'Természetes fényhatás',
      'Visszafogott dimenzió',
      'Tónerezés',
      'Finom árnyalatok kialakítása'
    ]
  },
  {
    id: 'roottouch',
    title: 'Tőfestés',
    subtitle: 'Root Touch Up',
    duration: '1,5 óra',
    arcana: 'IX',
    steps: [
      'Lenövés felmérése',
      'Színegyeztetés',
      'Tőfesték precíz felvitele',
      'Behatási idő',
      'Alapos öblítés',
      'Gyors szárítás'
    ]
  }
];

const MagicServiceCards = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [particles, setParticles] = useState([]);

  const handleCardClick = (service) => {
    setSelectedCard(service);
    // Generálunk random részecskéket a robbanáshoz
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 1 + Math.random() * 1
    }));
    setParticles(newParticles);
  };

  const handleClose = () => {
    setSelectedCard(null);
    setParticles([]);
  };

  const scrollToPriceList = () => {
    const priceListSection = document.getElementById('szolgaltatasok');
    if (priceListSection) {
      priceListSection.scrollIntoView({ behavior: 'smooth' });
      handleClose();
    }
  };

  return (
    <section className="magic-services-section" id="magic-services">
      <div className="container">
        <div className="magic-services-header">
          <h2 className="magic-title">Varázslatos Szolgáltatásaink</h2>
          <p className="magic-subtitle">Válassz a mágikus kártyák közül</p>
        </div>

        <div className={`magic-cards-grid ${selectedCard ? 'card-selected' : ''}`}>
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`magic-card ${selectedCard?.id === service.id ? 'active' : ''} ${selectedCard && selectedCard.id !== service.id ? 'background' : ''}`}
              onClick={() => !selectedCard && handleCardClick(service)}
            >
              <div className="magic-card-inner">
                <div className="card-arcana">{service.arcana}</div>
                <div className="card-corner top-left">✦</div>
                <div className="card-corner top-right">✦</div>
                <div className="card-corner bottom-left">✦</div>
                <div className="card-corner bottom-right">✦</div>

                {service.image ? (
                  <div className="card-image-container">
                    <img src={service.image} alt={service.title} className="card-image" />
                  </div>
                ) : (
                  <div className="card-icon-container">
                    <FontAwesomeIcon icon={service.id === 'consultation' ? faCalendarAlt : faPaintBrush} />
                  </div>
                )}

                <div className="card-divider"></div>

                <div className="card-content">
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-subtitle">{service.subtitle}</p>
                  <p className="card-duration">⏱ {service.duration}</p>
                </div>

                {selectedCard?.id === service.id && (
                  <div className="card-details">
                    <button className="close-btn" onClick={handleClose}>
                      <FontAwesomeIcon icon={faTimes} />
                    </button>

                    <h4 className="details-title">Lépések:</h4>
                    <ol className="steps-list">
                      {service.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>

                    <button className="price-btn" onClick={scrollToPriceList}>
                      <FontAwesomeIcon icon={faCoins} /> Árlista megtekintése
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mágikus részecskék a háttérben */}
        {selectedCard && (
          <div className="magic-particles">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="particle"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MagicServiceCards;
