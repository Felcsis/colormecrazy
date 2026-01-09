import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCut,
  faPaintBrush,
  faGraduationCap,
  faSpa,
  faScissors
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section className="section about" id="bemutatkozas">
      <div className="container">
        <h2 className="section-title">Color Me Crazy</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-subtitle">
              <FontAwesomeIcon icon={faScissors} /> Fodrászat & Kozmetika
            </p>
            <p className="about-services">
              <FontAwesomeIcon icon={faCut} /> Női • Férfi • Gyermek • Raszta
            </p>

            <p>A Color Me Crazy fodrászüzlet <strong>2018-ban</strong> nyitotta meg kapuit azok előtt, akik nem érik be az átlagossal. Szalonunkban négy tapasztalt fodrász dolgozik, akik szenvedéllyel és kreativitással formálják vendégeink megjelenését.</p>

            <p><FontAwesomeIcon icon={faPaintBrush} /> Fő profilunk az <strong>extrémebb hajstílusok</strong>, a raszták, színes hajak, hajtetoválások, kreatív hajvágások, valamint a balayage-tól a teljes hajszín-festésekig minden hajfestési technika. Női, férfi és gyermek hajvágásokkal egyaránt foglalkozunk, emellett alkalmi frizurák készítését is vállaljuk.</p>

            <p>Szalonunk nem egy átlagos fodrászüzlet: kicsit bohém, kicsit naturális, ahol az <strong>egyediség és az önkifejezés</strong> áll a középpontban.</p>

            <p><FontAwesomeIcon icon={faGraduationCap} /> Lehetőséget biztosítunk <strong>fodrász oktatásra</strong> is, így azok számára is nyitva állunk, akik szeretnék elsajátítani a szakma alapjait vagy továbbfejlődni benne.</p>

            <p><FontAwesomeIcon icon={faSpa} /> <strong>2025-től</strong> szolgáltatásaink kozmetikai kezelésekkel is bővülnek, hogy vendégeink teljes körű megújulást kapjanak egy helyen.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
