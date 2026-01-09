import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faCut,
  faSpa
} from '@fortawesome/free-solid-svg-icons';

const teamMembers = [
  {
    id: 'felicia',
    name: 'Felicia',
    role: 'Mester Fodrász',
    description: 'Több mint 15 év tapasztalattal rendelkező mester fodrász. Specialitása a precíz vágástechnikák és a modern színezési eljárások.',
    image: '/images/Felcsi.jpg',
    featured: true
  },
  {
    id: 'gitta',
    name: 'Gitta',
    role: 'Fodrász',
    description: 'Kreatív fodrász, aki mindig naprakész a legújabb trendekkel. Különösen szeret esküvői frizurákat készíteni.',
    image: '/images/Gitta.jpg'
  },
  {
    id: 'lili',
    name: 'Lili',
    role: 'Fablehair Stylist',
    description: '2025 júniusában kezdtem a szakmában. Hozzám legközelebb a hajfestés áll, különösen a balayage technikák és szőkítések. Folyamatosan fejlődöm és bővítem szolgáltatásaimat.',
    image: '/images/Lili.jpg'
  },
  {
    id: 'anti',
    name: 'Anti',
    role: 'Fodrász',
    description: 'Én vagyok AnTi. Egész frissen, 2025 tavaszán vizsgáztam, de már 6 évvel ezt megelőzően - amióta szakállt hordok - kezdett érdekelni a szakma. Biztosan állítható, a kedvenc részem a hajvágások A-tól Z-ig. Legyen szó klasszikus, alap, vagy divat hajvágásról. Minden egyes munka újabb lehetőség a további fejlődésre. NINCS ÁTLAGOS NAP. Viszont néha nem árt a pihenés! Ilyenkor jól tud esni egy kis horror, legyen szó, film/sorozat vagy írott formában.',
    image: '/images/Anti.jpg'
  },
  {
    id: 'bogi',
    name: 'Bogi',
    role: 'Kozmetikus',
    description: 'Szép Boglárka vagyok, 2024 óta kozmetikus. A kozmetika világa mindig is érdekelt, ma már pontosan tudom, mennyire fontos a szakértői segítség és a tudatos, személyre szabott bőrápolás. Számomra ez nem csupán munka, hanem hivatás, amelyben nap mint nap segíthetek vendégeimnek abban, hogy jól érezzék magukat a bőrükben. GIGI professzionális kozmetikai termékekkel dolgozom. Hiszem, hogy minden bőr megérdemli a figyelmet, a törődést és azt a nyugodt, feltöltő élményt, amelyet egy professzionális kozmetikai kezelés nyújtani tud.',
    image: '/images/Bogi.JPG',
    isKozmetikus: true
  }
];

const Team = () => {
  return (
    <section className="section csapat" id="csapat">
      <div className="container">
        <h2 className="section-title">Csapatunk</h2>
        <p className="section-subtitle">
          A Color Me Crazy 2018-ban nyílt azok előtt, akik nem érik be az átlagossal.
          Négy tapasztalt fodrász és egy kozmetikus dolgozik szalonunkban.
        </p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <Link
              key={index}
              to={`/csapat/${member.id}`}
              className={`team-card ${member.featured ? 'featured' : ''} ${member.isKozmetikus ? 'kozmetikus' : ''}`}
            >
              <div className="team-image">
                <img src={member.image} alt={`${member.name} - ${member.role}`} />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <span className="team-role">
                  <FontAwesomeIcon icon={member.featured ? faStar : (member.isKozmetikus ? faSpa : faCut)} /> {member.role}
                </span>
                <p>{member.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
