import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
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
      </div>
    </section>
  );
};

export default About;
