import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faCut,
  faSpa,
  faHatWizard,
  faWandMagicSparkles,
  faSun,
  faGem,
  faHand
} from '@fortawesome/free-solid-svg-icons';

const teamMembers = [
  {
    id: 'felicia',
    name: 'Felicia',
    role: 'Mester Fodrász',
    description: 'Több mint 15 év tapasztalattal rendelkező mester fodrász. Specialitása a precíz vágástechnikák és a modern színezési eljárások.',
    image: '/images/Felcsi.jpg',
    featured: true,
    mysticIcon: faHatWizard,
    arcana: 'The Magician'
  },
  {
    id: 'gitta',
    name: 'Gitta',
    role: 'Fodrász',
    description: 'Kreatív fodrász, aki mindig naprakész a legújabb trendekkel. Különösen szeret esküvői frizurákat készíteni.',
    image: '/images/Gitta.jpg',
    mysticIcon: faSun,
    arcana: 'The Sun'
  },
  {
    id: 'lili',
    name: 'Lili',
    role: 'Fablehair Stylist',
    description: 'Sziasztok! Lili vagyok, a Color Me Crazy szalon egyik fodrásza. 2025 júniusában kezdtem el dolgozni ebben a szakmában, amelyet azért választottam, mert mindig is közel álltak hozzám a hajak, különösen a festés. Már korábban is rengeteg barátnőm haját készítettem el, és hamar éreztem, hogy ezt akár életem végéig is szívesen csinálnám. Azért szeretem a fodrászatot, mert folyamatos fejlődési lehetőséget nyújt, mindig van mit tanulni, így egyáltalán nem válik unalmassá. Hozzám legközelebb a hajfestés áll, ezen belül is a balayage technikák és a szőkítések, hiszen ezekkel igazán gyönyörű eredményeket lehet elérni, legyen szó természetes vagy akár színes árnyalatokról. A jövőben szeretnék minél többet fejlődni, számos képzésen részt venni, és folyamatosan bővíteni a szolgáltatásaimat. Ezek a célok nap mint nap motiválnak arra, hogy egyre jobb legyek a szakmámban. Amikor éppen nem a szalonban dolgozom, szívesen töltöm a szabadidőmet a természetben, szeretek kirándulni, valamint barátokkal kikapcsolódni.',
    image: '/images/Lili.jpg',
    mysticIcon: faWandMagicSparkles,
    arcana: 'The Star'
  },
  {
    id: 'anti',
    name: 'Anti',
    role: 'Fodrász',
    description: 'Én vagyok AnTi. Egész frissen, 2025 tavaszán vizsgáztam, de már 6 évvel ezt megelőzően - amióta szakállt hordok - kezdett érdekelni a szakma. Biztosan állítható, a kedvenc részem a hajvágások A-tól Z-ig. Legyen szó klasszikus, alap, vagy divat hajvágásról. Minden egyes munka újabb lehetőség a további fejlődésre. NINCS ÁTLAGOS NAP. Viszont néha nem árt a pihenés! Ilyenkor jól tud esni egy kis horror, legyen szó, film/sorozat vagy írott formában.',
    image: '/images/Anti.jpg',
    mysticIcon: faCut,
    arcana: 'The Hermit'
  },
  {
    id: 'bogi',
    name: 'Bogi',
    role: 'Kozmetikus',
    description: 'Szép Boglárka vagyok, 2024 óta kozmetikus. A kozmetika világa mindig is érdekelt, ma már pontosan tudom, mennyire fontos a szakértői segítség és a tudatos, személyre szabott bőrápolás. Számomra ez nem csupán munka, hanem hivatás, amelyben nap mint nap segíthetek vendégeimnek abban, hogy jól érezzék magukat a bőrükben. GIGI professzionális kozmetikai termékekkel dolgozom. Hiszem, hogy minden bőr megérdemli a figyelmet, a törődést és azt a nyugodt, feltöltő élményt, amelyet egy professzionális kozmetikai kezelés nyújtani tud.',
    image: '/images/Bogi.JPG',
    isKozmetikus: true,
    mysticIcon: faGem,
    arcana: 'The Empress'
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
              data-member={member.id}
            >
              <div className="arcana-number">
                <FontAwesomeIcon icon={member.mysticIcon} />
              </div>
              <div className="team-image">
                <img src={member.image} alt={`${member.name} - ${member.role}`} />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <span className="team-role">
                  {member.role}
                </span>
                <div className="arcana-name">{member.arcana}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
