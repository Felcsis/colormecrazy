import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faCut,
  faUsers,
  faCalendarAlt,
  faCertificate,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';
import './Education.css';

const Education = () => {
  return (
    <div className="education-page">
      <Link to="/#bemutatkozas" className="back-button">
        <FontAwesomeIcon icon={faChevronLeft} /> Vissza
      </Link>

      <div className="education-hero">
        <div className="container">
          <FontAwesomeIcon icon={faGraduationCap} className="education-hero-icon" />
          <h1 className="education-hero-title">Fodrász Oktatás</h1>
          <p className="education-hero-subtitle">
            Tanulj tőlünk és válj te is szakemberré!
          </p>
        </div>
      </div>

      <section className="education-intro">
        <div className="container">
          <div className="intro-content">
            <p>
              A Color Me Crazy szalonban lehetőséget biztosítunk <strong>fodrász oktatásra</strong>,
              ahol tapasztalt szakembereinktől tanulhatsz. Akár most kezded a szakmát, akár
              fejleszteni szeretnéd tudásodat, nálunk a megfelelő helyen jársz.
            </p>
            <p>
              Oktatásaink során elsajátíthatod a <strong>legfrissebb technikákat</strong>,
              megtanulhatod a különböző vágási és festési eljárásokat, valamint betekintést
              nyerhetsz a szalon mindennapjaiba is.
            </p>
          </div>
        </div>
      </section>

      <section className="education-programs">
        <div className="container">
          <h2 className="section-title">Képzési Programjaink</h2>

          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">
                <FontAwesomeIcon icon={faCut} />
              </div>
              <h3>Alapozó Képzés</h3>
              <p>
                Elsajátíthatod a fodrászat alapjait, a hajvágás és hajmosás technikáit,
                valamint megismerkedhetsz a különböző eszközökkel és anyagokkal.
              </p>
              <ul className="program-features">
                <li>Alapvető vágástechnikák</li>
                <li>Hajmosás és ápolás</li>
                <li>Eszközismeret</li>
                <li>Praktikus gyakorlatok</li>
              </ul>
            </div>

            <div className="program-card featured">
              <div className="program-icon">
                <FontAwesomeIcon icon={faCertificate} />
              </div>
              <h3>Haladó Technikák</h3>
              <p>
                Fejleszd készségeidet modern vágási és festési technikákkal, balayage,
                ombre, és egyéb speciális eljárásokkal.
              </p>
              <ul className="program-features">
                <li>Balayage és Ombre</li>
                <li>Színelméllet</li>
                <li>Kreatív vágások</li>
                <li>Trendek és stílusok</li>
              </ul>
              <span className="featured-badge">Népszerű</span>
            </div>

            <div className="program-card">
              <div className="program-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3>Egyéni Mentorálás</h3>
              <p>
                Személyre szabott oktatás tapasztalt fodrászainktól, ahol az általad
                választott témákra koncentrálhatsz.
              </p>
              <ul className="program-features">
                <li>1-1 foglalkozások</li>
                <li>Rugalmas időbeosztás</li>
                <li>Személyre szabott tempó</li>
                <li>Egyedi témák</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="education-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <FontAwesomeIcon icon={faCalendarAlt} className="info-icon" />
              <h4>Időpontfoglalás</h4>
              <p>
                Képzéseink időpontegyeztetés alapján indulnak.
                Vedd fel velünk a kapcsolatot, hogy megtaláljuk
                a számodra megfelelő időpontot!
              </p>
            </div>

            <div className="info-card">
              <FontAwesomeIcon icon={faUsers} className="info-icon" />
              <h4>Kis Létszám</h4>
              <p>
                Kis csoportokban dolgozunk, hogy minden
                résztvevő maximális figyelmet és segítséget
                kaphasson az oktatóktól.
              </p>
            </div>

            <div className="info-card">
              <FontAwesomeIcon icon={faCertificate} className="info-icon" />
              <h4>Gyakorlati Oktatás</h4>
              <p>
                A gyakorlat elsajátítása a legfontosabb.
                Valódi modelleken gyakorolhatsz oktatóink
                felügyelete mellett.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="education-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Készen állsz a tanulásra?</h2>
            <p>
              Jelentkezz most, és kezdd el utadat a fodrászat világában!
            </p>
            <a href="/#kapcsolat" className="cta-button">
              Kapcsolatfelvétel
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
