import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './TeamMemberDetail.css';

const teamData = {
  felicia: {
    name: 'Felicia',
    role: 'Mester Fodrász',
    description: 'Több mint 15 év tapasztalattal rendelkező mester fodrász. Specialitása a precíz vágástechnikák és a modern színezési eljárások.',
    image: '/images/Felcsi.jpg',
    portfolio: 'felcsi'
  },
  gitta: {
    name: 'Gitta',
    role: 'Fodrász',
    description: 'Kreatív fodrász, aki mindig naprakész a legújabb trendekkel. Különösen szeret esküvői frizurákat készíteni.',
    image: '/images/Gitta.jpg',
    portfolio: 'gitta'
  },
  lili: {
    name: 'Lili',
    role: 'Fablehair Stylist',
    description: '2025 júniusában kezdtem a szakmában. Hozzám legközelebb a hajfestés áll, különösen a balayage technikák és szőkítések. Folyamatosan fejlődöm és bővítem szolgáltatásaimat.',
    image: '/images/Lili.jpg',
    portfolio: 'lili'
  },
  anti: {
    name: 'Anti',
    role: 'Fodrász',
    description: 'Én vagyok AnTi. Egész frissen, 2025 tavaszán vizsgáztam, de már 6 évvel ezt megelőzően - amióta szakállt hordok - kezdett érdekelni a szakma. Biztosan állítható, a kedvenc részem a hajvágások A-tól Z-ig. Legyen szó klasszikus, alap, vagy divat hajvágásról. Minden egyes munka újabb lehetőség a további fejlődésre. NINCS ÁTLAGOS NAP. Viszont néha nem árt a pihenés! Ilyenkor jól tud esni egy kis horror, legyen szó, film/sorozat vagy írott formában.',
    image: '/images/Anti.jpg',
    portfolio: 'anti'
  },
  bogi: {
    name: 'Bogi',
    role: 'Kozmetikus',
    description: 'Szép Boglárka vagyok, 2024 óta kozmetikus. A kozmetika világa mindig is érdekelt, ma már pontosan tudom, mennyire fontos a szakértői segítség és a tudatos, személyre szabott bőrápolás. Számomra ez nem csupán munka, hanem hivatás, amelyben nap mint nap segíthetek vendégeimnek abban, hogy jól érezzék magukat a bőrükben. GIGI professzionális kozmetikai termékekkel dolgozom. Hiszem, hogy minden bőr megérdemli a figyelmet, a törődést és azt a nyugodt, feltöltő élményt, amelyet egy professzionális kozmetikai kezelés nyújtani tud.',
    image: '/images/Bogi.JPG',
    portfolio: 'bogi'
  }
};

const TeamMemberDetail = () => {
  const { memberId } = useParams();
  const member = teamData[memberId];
  const [portfolioImages, setPortfolioImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (member) {
      // Load portfolio images from generated JSON
      const loadImages = async () => {
        try {
          const response = await fetch('/portfolio-images.json');
          if (response.ok) {
            const allImages = await response.json();
            setPortfolioImages(allImages[member.portfolio] || []);
          }
        } catch (error) {
          console.error('Error loading images:', error);
        } finally {
          setLoading(false);
        }
      };

      loadImages();
    }
  }, [member]);

  if (!member) {
    return (
      <div className="team-detail-error">
        <h2>Csapattag nem található</h2>
        <Link to="/" className="btn btn-primary">Vissza a főoldalra</Link>
      </div>
    );
  }

  return (
    <div className="team-detail">
      <Link to="/#csapat" className="back-button">← Vissza a csapathoz</Link>

      <div className="team-detail-hero">
        <div className="team-detail-profile">
          <img src={member.image} alt={member.name} className="team-detail-image" />
          <div className="team-detail-info">
            <h1>{member.name}</h1>
            <span className="team-detail-role">{member.role}</span>
            <p className="team-detail-description">{member.description}</p>
          </div>
        </div>
      </div>

      <div className="team-detail-portfolio">
        <div className="container">
          <h2 className="portfolio-title">Munkáim</h2>
          {loading ? (
            <div className="portfolio-loading">
              <p>Képek betöltése...</p>
            </div>
          ) : portfolioImages.length > 0 ? (
            <div className="portfolio-grid">
              {portfolioImages.map((image, index) => (
                <div key={index} className="portfolio-item">
                  <img src={image} alt={`${member.name} munkája ${index + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          ) : (
            <div className="portfolio-note">
              <p>Hamarosan töltenek fel munkákat!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberDetail;
