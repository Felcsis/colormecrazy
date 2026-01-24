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
          <h1 className="education-hero-title">Duális Képzés Fodrászoknak</h1>
          <p className="education-hero-subtitle">
            Kezd nálunk a karriered! Gyakorlati képzés mesterfodrász oktatással
          </p>
        </div>
      </div>

      <section className="education-intro">
        <div className="container">
          <div className="intro-content">
            <p>
              A Color Me Crazy hivatalos <strong>duális képzési partner</strong> a{' '}
              <strong>Szegedi SZC Móravárosi Technikum és Szakképző Iskola</strong> számára.{' '}
              Csongrád-Csanád megyei diákokat várunk, akik komolyan gondolják a fodrász szakmát{' '}
              és egy barátságos, professzionális környezetben szeretnék elsajátítani az alapokat.
            </p>
            <p>
              Nálunk nem csak tanulsz – <strong>valódi szaloni tapasztalatot szerzel</strong>,{' '}
              modern eszközökkel dolgozol, és felkészülsz a sikeres szakmai vizsgára.
            </p>
          </div>
        </div>
      </section>

      <section className="education-programs">
        <div className="container">
          <h2 className="section-title">Amit Kínálunk</h2>

          <div className="benefits-list">
            <div className="benefit-item">
              <FontAwesomeIcon icon={faGraduationCap} className="benefit-icon" />
              <div className="benefit-content">
                <h4>Mesterfodrász vezeti a képzést</h4>
                <p>Felicia mesterfodrász személyesen tanít minden diákot</p>
              </div>
            </div>

            <div className="benefit-item">
              <FontAwesomeIcon icon={faCut} className="benefit-icon" />
              <div className="benefit-content">
                <h4>Profi eszközök</h4>
                <p>Mindent biztosítunk, és segítünk kiválasztani a saját eszközeidet</p>
              </div>
            </div>

            <div className="benefit-item">
              <FontAwesomeIcon icon={faCertificate} className="benefit-icon" />
              <div className="benefit-content">
                <h4>Nemzetközi márkák</h4>
                <p>Mátrix, Echosline, Pulpriot, Keune, Joico termékek bemutatása és hatóanyag-ismertetés</p>
              </div>
            </div>

            <div className="benefit-item">
              <FontAwesomeIcon icon={faUsers} className="benefit-icon" />
              <div className="benefit-content">
                <h4>Fokozatos gyakorlat</h4>
                <p>Modellező fejeken kezded, majd valódi vendégekkel dolgozol</p>
              </div>
            </div>

            <div className="benefit-item">
              <FontAwesomeIcon icon={faCalendarAlt} className="benefit-icon" />
              <div className="benefit-content">
                <h4>Modellkeresés</h4>
                <p>Megtanítjuk, hogyan építsd a portfóliód és szerezz modelleket – ezzel már készülsz a nagybetűs életre</p>
              </div>
            </div>

            <div className="benefit-item">
              <FontAwesomeIcon icon={faCertificate} className="benefit-icon" />
              <div className="benefit-content">
                <h4>Elhelyezkedési segítség</h4>
                <p>Sikeres vizsga után támogatunk az álláskeresésben</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="education-info">
        <div className="container">
          <h2 className="section-title">Képzési Részletek</h2>
          <div className="details-card">
            <div className="detail-item">
              <FontAwesomeIcon icon={faUsers} className="detail-icon" />
              <div>
                <h4>Maximum 7 fős létszám</h4>
                <p>Kis csoportban, személyre szabott figyelemmel</p>
              </div>
            </div>
            <div className="detail-item">
              <FontAwesomeIcon icon={faCalendarAlt} className="detail-icon" />
              <div>
                <h4>Váltott rendszer</h4>
                <p>1 hét gyakorlat a szalonban, 1 hét iskola – az iskola órarendje szerint</p>
              </div>
            </div>
            <div className="detail-item">
              <FontAwesomeIcon icon={faCertificate} className="detail-icon" />
              <div>
                <h4>Teljes vizsga felkészítés</h4>
                <p>Borotválás, hajvágás, festés, melír, dauercsavarás, konty – minden vizsga feladatra felkészítünk</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="education-application">
        <div className="container">
          <h2 className="section-title">Jelentkezés</h2>
          <div className="application-card">
            <p>
              <strong>Személyes interjú alapján</strong> válogatunk. Amit várunk: <strong>motiváció,
              alázat a szakma iránt, és egy 5 éves terv</strong>, amire együtt építkezhetünk.
            </p>
            <p>
              Ha úgy érzed, hogy ez neked való, és készen állsz a komoly munkára,
              vedd fel velünk a kapcsolatot!
            </p>
            <a href="/#kapcsolat" className="application-button">
              Kapcsolatfelvétel
            </a>
          </div>
        </div>
      </section>

      <section className="education-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Készen állsz arra, hogy profi fodrász legyél?</h2>
            <p>
              Jelentkezz most, és kezdd nálunk a karriered! Várunk szeretettel a Color Me Crazy csapatába.
            </p>
            <a href="/#kapcsolat" className="cta-button">
              Jelentkezem az interjúra
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
