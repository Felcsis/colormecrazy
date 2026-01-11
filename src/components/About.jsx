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

          <div className="services-tarot-grid">
            {/* Tarot Card 1 - Egyszínű festés */}
            <div className="service-tarot-card" data-service="allover">
              <div className="tarot-corner-decoration top-left">✦</div>
              <div className="tarot-corner-decoration top-right">✦</div>

              <div className="tarot-card-header">
                <div className="tarot-arcana-number">I</div>
                <div className="tarot-divider"></div>
              </div>

              <div className="tarot-image-container">
                <img
                  src="/images/services/allover.webp"
                  alt="Egyszínű festés"
                  className="tarot-image"
                  loading="lazy"
                />
              </div>

              <div className="tarot-divider"></div>

              <div className="tarot-card-content">
                <h4 className="tarot-title">Egyszínű festés</h4>
                <p className="tarot-subtitle">All Over Color</p>
                <p className="tarot-description">
                  Az egyszínű vagy több szín festés során a haj teljes hosszára egyenletesen kerül fel egy vagy több szín. Ideális ősz haj fedésére vagy friss megjelenéshez.
                </p>
                <p className="tarot-duration">⏱ 2 óra</p>
              </div>

              <div className="tarot-corner-decoration bottom-left">✦</div>
              <div className="tarot-corner-decoration bottom-right">✦</div>
            </div>

            {/* Tarot Card 2 - Balayage */}
            <div className="service-tarot-card" data-service="balayage">
              <div className="tarot-corner-decoration top-left">✦</div>
              <div className="tarot-corner-decoration top-right">✦</div>

              <div className="tarot-card-header">
                <div className="tarot-arcana-number">II</div>
                <div className="tarot-divider"></div>
              </div>

              <div className="tarot-image-container">
                <img
                  src="/images/services/balayage.webp"
                  alt="Balayage"
                  className="tarot-image"
                  loading="lazy"
                />
              </div>

              <div className="tarot-divider"></div>

              <div className="tarot-card-content">
                <h4 className="tarot-title">Balayage</h4>
                <p className="tarot-subtitle">Kézzel festett melírozás</p>
                <p className="tarot-description">
                  Kézzel festett technika, amely természetes, napvilágosított hatást eredményez. Lágy átmenetek, kevésbé feltűnő lenövés.
                </p>
                <p className="tarot-duration">⏱ 4 óra</p>
              </div>

              <div className="tarot-corner-decoration bottom-left">✦</div>
              <div className="tarot-corner-decoration bottom-right">✦</div>
            </div>

            {/* Tarot Card 3 - Szőkítés */}
            <div className="service-tarot-card" data-service="bleaching">
              <div className="tarot-corner-decoration top-left">✦</div>
              <div className="tarot-corner-decoration top-right">✦</div>

              <div className="tarot-card-header">
                <div className="tarot-arcana-number">III</div>
                <div className="tarot-divider"></div>
              </div>

              <div className="tarot-image-container">
                <img
                  src="/images/services/bleaching.webp"
                  alt="Szőkítés és árnyalás"
                  className="tarot-image"
                  loading="lazy"
                />
              </div>

              <div className="tarot-divider"></div>

              <div className="tarot-card-content">
                <h4 className="tarot-title">Szőkítés és árnyalás</h4>
                <p className="tarot-subtitle">Bleaching & Toning</p>
                <p className="tarot-description">
                  Lenövés szőkítése, majd tónerezéssel a nem kívánt sárgás árnyalatok semlegesítése. Egységes, élénk szín.
                </p>
                <p className="tarot-duration">⏱ 3 óra</p>
              </div>

              <div className="tarot-corner-decoration bottom-left">✦</div>
              <div className="tarot-corner-decoration bottom-right">✦</div>
            </div>

            {/* Tarot Card 4 - Színkorrekció */}
            <div className="service-tarot-card" data-service="correction">
              <div className="tarot-corner-decoration top-left">✦</div>
              <div className="tarot-corner-decoration top-right">✦</div>

              <div className="tarot-card-header">
                <div className="tarot-arcana-number">IV</div>
                <div className="tarot-divider"></div>
              </div>

              <div className="tarot-image-container">
                <img
                  src="/images/services/correction.webp"
                  alt="Színkorrekció"
                  className="tarot-image"
                  loading="lazy"
                />
              </div>

              <div className="tarot-divider"></div>

              <div className="tarot-card-content">
                <h4 className="tarot-title">Színkorrekció</h4>
                <p className="tarot-subtitle">Color Correction</p>
                <p className="tarot-description">
                  Precíz, többlépcsős folyamat az egyenetlen hajszín kiegyenlítésére. Nem kívánt árnyalatok eltávolítása, tónerezés.
                </p>
                <p className="tarot-duration">⏱ 5 óra</p>
              </div>

              <div className="tarot-corner-decoration bottom-left">✦</div>
              <div className="tarot-corner-decoration bottom-right">✦</div>
            </div>

            {/* Tarot Card 5 - Konzultáció */}
            <div className="service-tarot-card" data-service="consultation">
              <div className="tarot-corner-decoration top-left">✦</div>
              <div className="tarot-corner-decoration top-right">✦</div>

              <div className="tarot-card-header">
                <div className="tarot-arcana-number">V</div>
                <div className="tarot-divider"></div>
              </div>

              <div className="tarot-image-container">
                <div className="tarot-image-placeholder">
                  <FontAwesomeIcon icon={faCalendarAlt} className="tarot-icon" />
                </div>
              </div>

              <div className="tarot-divider"></div>

              <div className="tarot-card-content">
                <h4 className="tarot-title">Konzultáció</h4>
                <p className="tarot-subtitle">Consultation</p>
                <p className="tarot-description">
                  Haj típusának, állapotának és a kívánt végeredmény felmérése. Személyes beszélgetés a legmegfelelőbb technika meghatározásához.
                </p>
                <p className="tarot-duration">⏱ 30 perc • Ingyenes</p>
              </div>

              <div className="tarot-corner-decoration bottom-left">✦</div>
              <div className="tarot-corner-decoration bottom-right">✦</div>
            </div>

            {/* Tarot Card 6 - Dupla folyamat */}
            <div className="service-tarot-card" data-service="vivid">
              <div className="tarot-corner-decoration top-left">✦</div>
              <div className="tarot-corner-decoration top-right">✦</div>

              <div className="tarot-card-header">
                <div className="tarot-arcana-number">VI</div>
                <div className="tarot-divider"></div>
              </div>

              <div className="tarot-image-container">
                <img
                  src="/images/services/vivid.webp"
                  alt="Dupla folyamatú festés"
                  className="tarot-image"
                  loading="lazy"
                />
              </div>

              <div className="tarot-divider"></div>

              <div className="tarot-card-content">
                <h4 className="tarot-title">Dupla folyamatú festés</h4>
                <p className="tarot-subtitle">Vivid Color Process</p>
                <p className="tarot-description">
                  Kétlépcsős technika: haj világosítása világosszőke alapra, majd élénk színek felvitele. Látványos, karakteres megjelenés.
                </p>
                <p className="tarot-duration">⏱ 5 óra 30 perc</p>
              </div>

              <div className="tarot-corner-decoration bottom-left">✦</div>
              <div className="tarot-corner-decoration bottom-right">✦</div>
            </div>

            {/* Tarot Card 7 - Full Foil */}
            <div className="service-tarot-card" data-service="fullfoil">
              <div className="tarot-corner-decoration top-left">✦</div>
              <div className="tarot-corner-decoration top-right">✦</div>

              <div className="tarot-card-header">
                <div className="tarot-arcana-number">VII</div>
                <div className="tarot-divider"></div>
              </div>

              <div className="tarot-image-container">
                <img
                  src="/images/services/fullfoil.webp"
                  alt="Teljes melír fóliával"
                  className="tarot-image"
                  loading="lazy"
                />
              </div>

              <div className="tarot-divider"></div>

              <div className="tarot-card-content">
                <h4 className="tarot-title">Teljes melír fóliával</h4>
                <p className="tarot-subtitle">Full Foil Highlights</p>
                <p className="tarot-description">
                  Teljes fejrész fóliázva melírozva vagy árnyalva. Egyenletes szín tövektől hajvégekig, mélység és dimenzió.
                </p>
                <p className="tarot-duration">⏱ 4 óra</p>
              </div>

              <div className="tarot-corner-decoration bottom-left">✦</div>
              <div className="tarot-corner-decoration bottom-right">✦</div>
            </div>

            {/* Tarot Card 8 - Partial Foil */}
            <div className="service-tarot-card" data-service="partialfoil">
              <div className="tarot-corner-decoration top-left">✦</div>
              <div className="tarot-corner-decoration top-right">✦</div>

              <div className="tarot-card-header">
                <div className="tarot-arcana-number">VIII</div>
                <div className="tarot-divider"></div>
              </div>

              <div className="tarot-image-container">
                <img
                  src="/images/services/partialfoil.webp"
                  alt="Részleges melír"
                  className="tarot-image"
                  loading="lazy"
                />
              </div>

              <div className="tarot-divider"></div>

              <div className="tarot-card-content">
                <h4 className="tarot-title">Részleges melír</h4>
                <p className="tarot-subtitle">Partial Foil</p>
                <p className="tarot-description">
                  Fóliák stratégiailag a fejtetőn és oldalsó részeken. Természetes fény és dimenzió, visszafogott megjelenés.
                </p>
                <p className="tarot-duration">⏱ 3 óra 30 perc</p>
              </div>

              <div className="tarot-corner-decoration bottom-left">✦</div>
              <div className="tarot-corner-decoration bottom-right">✦</div>
            </div>

            {/* Tarot Card 9 - Tőfestés */}
            <div className="service-tarot-card" data-service="roottouch">
              <div className="tarot-corner-decoration top-left">✦</div>
              <div className="tarot-corner-decoration top-right">✦</div>

              <div className="tarot-card-header">
                <div className="tarot-arcana-number">IX</div>
                <div className="tarot-divider"></div>
              </div>

              <div className="tarot-image-container">
                <div className="tarot-image-placeholder">
                  <FontAwesomeIcon icon={faPaintBrush} className="tarot-icon" />
                </div>
              </div>

              <div className="tarot-divider"></div>

              <div className="tarot-card-content">
                <h4 className="tarot-title">Tőfestés</h4>
                <p className="tarot-subtitle">Root Touch Up</p>
                <p className="tarot-description">
                  Lenövés festése az egységes szín fenntartásához. Ideális két teljes festés között az ápolt megjelenésért.
                </p>
                <p className="tarot-duration">⏱ 1,5 óra</p>
              </div>

              <div className="tarot-corner-decoration bottom-left">✦</div>
              <div className="tarot-corner-decoration bottom-right">✦</div>
            </div>

            {/* Tarot Card 10 - Élénk színfrissítés */}
            <div className="service-tarot-card" data-service="refresh">
              <div className="tarot-corner-decoration top-left">✦</div>
              <div className="tarot-corner-decoration top-right">✦</div>

              <div className="tarot-card-header">
                <div className="tarot-arcana-number">X</div>
                <div className="tarot-divider"></div>
              </div>

              <div className="tarot-image-container">
                <div className="tarot-image-placeholder">
                  <FontAwesomeIcon icon={faPaintBrush} className="tarot-icon" />
                </div>
              </div>

              <div className="tarot-divider"></div>

              <div className="tarot-card-content">
                <h4 className="tarot-title">Élénk színfrissítés</h4>
                <p className="tarot-subtitle">Vivid Color Refresh</p>
                <p className="tarot-description">
                  Élénk szín közvetlen felvitele világosított hajra. Gyorsabb folyamat, látványos eredmény. 2-3 havonta frissíthető.
                </p>
                <p className="tarot-duration">⏱ 2 óra</p>
              </div>

              <div className="tarot-corner-decoration bottom-left">✦</div>
              <div className="tarot-corner-decoration bottom-right">✦</div>
            </div>

            {/* Tarot Card 11 - Tóner */}
            <div className="service-tarot-card" data-service="toner">
              <div className="tarot-corner-decoration top-left">✦</div>
              <div className="tarot-corner-decoration top-right">✦</div>

              <div className="tarot-card-header">
                <div className="tarot-arcana-number">XI</div>
                <div className="tarot-divider"></div>
              </div>

              <div className="tarot-image-container">
                <div className="tarot-image-placeholder">
                  <FontAwesomeIcon icon={faPaintBrush} className="tarot-icon" />
                </div>
              </div>

              <div className="tarot-divider"></div>

              <div className="tarot-card-content">
                <h4 className="tarot-title">Tóner szolgáltatás</h4>
                <p className="tarot-subtitle">Standalone Toning</p>
                <p className="tarot-description">
                  Nem kívánt sárgás vagy rezes árnyalatok semlegesítése. Fokozza a fényt, egységesíti a színt. Önállóan vagy világosítás után.
                </p>
                <p className="tarot-duration">⏱ 2 óra</p>
              </div>

              <div className="tarot-corner-decoration bottom-left">✦</div>
              <div className="tarot-corner-decoration bottom-right">✦</div>
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
