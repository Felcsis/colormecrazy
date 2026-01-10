import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCut,
  faPaintBrush,
  faSpa,
  faScissors,
  faCalendarAlt,
  faHeart
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section className="section about" id="bemutatkozas">
      <div className="container">
        <h2 className="section-title">Bemutatkozás</h2>

        {/* Story Section */}
        <div className="about-story">
          <div className="story-header">
            <FontAwesomeIcon icon={faHeart} className="story-icon" />
            <h3 className="story-title">Történetünk</h3>
          </div>

          <div className="story-content">
            <div className="story-year">2018</div>
            <p className="story-text">
              A Color Me Crazy fodrászüzlet <strong>2018-ban</strong> nyitotta meg kapuit
              azok előtt, akik nem érik be az átlagossal. Szalonunk azóta folyamatosan
              fejlődik és bővül, hogy vendégeinknek a lehető legjobb élményt nyújthassuk.
            </p>

            <p className="story-text">
              Szalonunk nem egy átlagos fodrászüzlet: <strong>kicsit bohém, kicsit naturális</strong>,
              ahol az egyediség és az önkifejezés áll a középpontban. Hiszünk abban, hogy
              minden vendégünk egyedi, és ennek megfelelően alakítjuk ki a számukra legmegfelelőbb
              megoldást.
            </p>

            <p className="story-text">
              <strong>2025-től</strong> szolgáltatásaink kozmetikai kezelésekkel is bővülnek,
              hogy vendégeink teljes körű megújulást kapjanak egy helyen.
            </p>
          </div>
        </div>

        {/* Services & Profile Section */}
        <div className="about-services-section">
          <div className="services-header">
            <FontAwesomeIcon icon={faScissors} className="services-icon" />
            <h3 className="services-title">Szakértelmünk & Szolgáltatásaink</h3>
          </div>

          <div className="services-grid">
            <div className="service-highlight">
              <div className="service-icon-wrapper">
                <FontAwesomeIcon icon={faPaintBrush} />
              </div>
              <h4>Fő Profilunk</h4>
              <p>
                <strong>Extrém hajstílusok:</strong> raszták, színes hajak, hajtetoválások,
                kreatív hajvágások
              </p>
              <p>
                <strong>Hajfestési technikák:</strong> balayage-tól a teljes hajszín-festésekig
              </p>
            </div>

            <div className="service-highlight">
              <div className="service-icon-wrapper">
                <FontAwesomeIcon icon={faCut} />
              </div>
              <h4>Hajvágások</h4>
              <p>
                <strong>Női</strong> hajvágások minden hosszban
              </p>
              <p>
                <strong>Férfi</strong> hajvágások klasszikus és modern stílusban
              </p>
              <p>
                <strong>Gyermek</strong> hajvágások
              </p>
            </div>

            <div className="service-highlight">
              <div className="service-icon-wrapper">
                <FontAwesomeIcon icon={faSpa} />
              </div>
              <h4>Kozmetika</h4>
              <p>
                <strong>Arckezelések</strong> GIGI professzionális termékekkel
              </p>
              <p>
                <strong>Szempilla & szemöldök</strong> festés, lifting, styling
              </p>
              <p>
                <strong>Gyantázás</strong> és smink szolgáltatások
              </p>
            </div>

            <div className="service-highlight">
              <div className="service-icon-wrapper">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </div>
              <h4>Alkalmi Szolgáltatások</h4>
              <p>
                <strong>Esküvői</strong> frizurák és smink
              </p>
              <p>
                <strong>Alkalmi</strong> kontyok és egyedi frizurák
              </p>
              <p>
                <strong>Steampod</strong> hajkezelés
              </p>
            </div>
          </div>

          <div className="team-intro">
            <p>
              Szalonunkban <strong>négy tapasztalt fodrász</strong> és egy <strong>kozmetikus</strong>
              dolgozik, akik szenvedéllyel és kreativitással formálják vendégeink megjelenését.
              Minden szakemberünk folyamatosan képzi magát, hogy a legfrissebb trendekkel és
              technikákkal szolgálhassa vendégeinket.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
