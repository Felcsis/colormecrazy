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
    description: 'Sziasztok, Felicia vagyok, fodrász mester és a Color Me Crazy alapítója. Hiszek abban, hogy egy jó frizura nem követ trendeket hanem személyiséget mesél el. 2012-ben döntöttem el, hogy fodrász szeretnék lenni, és 2016-ban sikeresen el is végeztem a képzést. 2017-ben már széket béreltem egy fodrászszalonban, ahol munka közben megszületett bennem egy álmom: egy olyan vállalkozás létrehozása, ahol barátságos, összetartó csapattal dolgozhatok együtt. 2018-ban megnyitottam a belvárosban a kis fodrászüzletemet. Sok gondolkodás és tapasztalatszerzés után eldöntöttem, hogy tanítani szeretnék, és átadni azt a tudást, amit folyamatosan fejlesztek és bővítek. 2022-ben sikeresen megszereztem a fodrász mester címet, majd a kis, szűkös szalonban kitanítottam a mostani csapatomat. 2025 decemberében megnyitottuk új üzletünket a Nemes Takács utca 8. szám alatt, ahol már kényelmes, modern környezetben tudjuk fogadni a szépülni vágyó vendégeinket legyenek visszatérők vagy újonnan érkezők. Amit még érdemes rólam tudni: különösen közel állnak hozzám az extrém, egyedi és különleges hajak, de valójában bármilyen frizurát szívesen elkészítek. A legfontosabb számomra mindig az, hogy a vendégeim boldogan és elégedetten távozzanak.',
    image: '/images/Felcsi.webp',
    featured: true,
    mysticIcon: faHatWizard,
    arcana: 'The Magician'
  },
  {
    id: 'gitta',
    name: 'Gitta',
    role: 'Fodrász',
    description: '2025 óta tevékenykedek fodrászként a Color Me Crazy szalonban. Mindig is fontosnak tartottam az önkifejezést, a színek harmóniáját, az egyéniség megjelenítését és hogy szeressük azt, amit a tükörben látunk. Amikor anno évekkel ezelőtt beültem Felicia székébe, rögtön tudtam, hogy számára is legalább ennyire lényeges dolgok ezek, mint nekem, így hát eldöntöttem, én is ehhez a csapathoz szeretnék tartozni. Egy-egy frizura elkészítése számomra egyet jelent a kreativitásom kamatoztatásával, ami miatt ez a szakma nem a munkám, hanem a hivatásom. Kifejezetten szeretek emberek között lenni, beszélgetni, témázgatni, a legtöbb emberrel megtalálom a közös hangot. Fontos, hogy megteremtsem a barátságos légkört magam körül, hiszen többek közül én is ez alapján (is) választok szolgáltatót. Maximalista vagyok, ezért nem engedem ki a vendégeim a kezeim közül úgy, hogy én magam nem vagyok elégedett az eredménnyel, hiszen nem kisebb dolgot tűztem ki célul, mint hogy mindenki fülig érő mosollyal, feltöltődve és persze elégedetten távozzon tőlem. Ez nekem legalább annyira fontos, mint neked! Az egyik fő ,,hitvallásom" a megfelelő kommunikáció. Szeretem, ha a vendég tisztában van azzal, milyen folyamatokon át jutunk el a kívánt célig. Mindig örömmel veszem a kérdéseket, hiszen minél többet beszélünk a dolgokról, annál pontosabb képet kapunk a végeredményről. Minden átalakulást imádok: legyen szó egy finom melírról, balayage-ról, vibráló színekről, finom vattacukros árnyalatokról, hercegnős mesefrizurákról, az aktuális trendeknek megfelelő hajvágásokról, vagy csak egy tőfestésről, amitől új fényeket kap egy haj.',
    image: '/images/Gitta.webp',
    mysticIcon: faSun,
    arcana: 'The Sun',
    contact: {
      phone: '+36 30 991 7641',
      instagram: 'haircraftbygitta',
      instagramUrl: 'https://www.instagram.com/haircraftbygitta/',
      facebook: 'Gitta HairCraft by Color Me Crazy',
      facebookUrl: 'https://www.facebook.com/profile.php?id=61577343102077'
    }
  },
  {
    id: 'lili',
    name: 'Lili',
    role: 'Fablehair Stylist',
    description: 'Sziasztok! Lili vagyok, a Color Me Crazy szalon egyik fodrásza. 2025 júniusában kezdtem el dolgozni ebben a szakmában, amelyet azért választottam, mert mindig is közel álltak hozzám a hajak, különösen a festés. Már korábban is rengeteg barátnőm haját készítettem el, és hamar éreztem, hogy ezt akár életem végéig is szívesen csinálnám. Azért szeretem a fodrászatot, mert folyamatos fejlődési lehetőséget nyújt, mindig van mit tanulni, így egyáltalán nem válik unalmassá. Hozzám legközelebb a hajfestés áll, ezen belül is a balayage technikák és a szőkítések, hiszen ezekkel igazán gyönyörű eredményeket lehet elérni, legyen szó természetes vagy akár színes árnyalatokról. A jövőben szeretnék minél többet fejlődni, számos képzésen részt venni, és folyamatosan bővíteni a szolgáltatásaimat. Ezek a célok nap mint nap motiválnak arra, hogy egyre jobb legyek a szakmámban. Amikor éppen nem a szalonban dolgozom, szívesen töltöm a szabadidőmet a természetben, szeretek kirándulni, valamint barátokkal kikapcsolódni.',
    image: '/images/Lili.webp',
    mysticIcon: faWandMagicSparkles,
    arcana: 'The Star',
    contact: {
      phone: '+36 20 594 2014',
      instagram: 'lilofablehair_by_colormecrazy',
      instagramUrl: 'https://www.instagram.com/lilofablehair_by_colormecrazy/',
      facebook: 'lilo fablehair by color me crazy',
      facebookUrl: 'https://www.facebook.com/profile.php?id=61577565787905'
    }
  },
  {
    id: 'anti',
    name: 'Anti',
    role: 'Fodrász',
    description: 'Én vagyok AnTi. Egész frissen, 2025 tavaszán vizsgáztam, de már 6 évvel ezt megelőzően - amióta szakállt hordok - kezdett érdekelni a szakma. Biztosan állítható, a kedvenc részem a hajvágások A-tól Z-ig. Legyen szó klasszikus, alap, vagy divat hajvágásról. Minden egyes munka újabb lehetőség a további fejlődésre. NINCS ÁTLAGOS NAP. Viszont néha nem árt a pihenés! Ilyenkor jól tud esni egy kis horror, legyen szó, film/sorozat vagy írott formában.',
    image: '/images/Anti.webp',
    mysticIcon: faCut,
    arcana: 'The Hermit',
    contact: {
      phone: '+36 20 923 7975',
      instagram: 'cmc.anti',
      instagramUrl: 'https://www.instagram.com/cmc.anti',
      facebook: 'AnTi // Color Me Crazy',
      facebookUrl: 'https://www.facebook.com/share/1Yqa2MrzD4/'
    }
  },
  {
    id: 'bogi',
    name: 'Bogi',
    role: 'Kozmetikus',
    description: 'Szép Boglárka vagyok, 2024 óta kozmetikus. Ez az út csak később, tudatos döntések és tapasztalatok során rajzolódott ki előttem. A kozmetika világa mindig is érdekelt, mégis sokáig csupán az otthoni bőrápolás volt része az életemnek. Ma már pontosan tudom, mennyire fontos a szakértői segítség, valamint a tudatos, személyre szabott bőrápolás. Mióta kozmetikusként dolgozom, el sem tudom képzelni a napjaimat a szakmai rutin, a kezelések és a bőrápolási folyamatok nélkül. Számomra ez nem csupán munka, hanem hivatás, amelyben nap mint nap segíthetek vendégeimnek abban, hogy jól érezzék magukat a bőrükben. Kezeléseim során GIGI professzionális kozmetikai termékekkel dolgozom, mert hiszek a magas minőségű hatóanyagok erejében, valamint a bőr egyedi igényeihez igazított, személyre szabott megoldásokban. Célom, hogy példát mutassak, és átadjam azt a szemléletet, miszerint a bőrápolás valóban fontos – nőknek és férfiaknak egyaránt, kortól függetlenül. 💆‍♀️ Hiszem, hogy minden bőr megérdemli a figyelmet, a törődést és azt a nyugodt, feltöltő élményt, amelyet egy professzionális kozmetikai kezelés nyújtani tud. Szeretettel várlak, ha szeretnéd bőrödet szakértő, figyelmes kezekben tudni, és együtt kialakítani azt a tudatos ápolási rutint, amely hosszú távon is támogatja bőröd egészségét és természetes ragyogását.',
    image: '/images/Bogi.webp',
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
          Felicia mesterfodrász vezeti csapatunkat, mellette Gitta, Lili és Anti női, férfi és gyermek fodrászként dolgoznak, kozmetikusunk Bogi pedig gondoskodik róla, hogy ne csak a haj, hanem a bőr is felfrissüljön.
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
