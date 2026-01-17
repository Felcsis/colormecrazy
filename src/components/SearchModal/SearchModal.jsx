import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faTimes,
  faScissors,
  faUsers,
  faImages,
  faStar,
  faGraduationCap,
  faMoneyBill,
  faInfoCircle,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import './SearchModal.css';

const SearchModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  // Kereshető tartalmak listája
  const searchableContent = [
    // Főoldal szekciók
    { title: 'Kezdőlap', keywords: ['kezdőlap', 'home', 'hero'], path: '/', section: 'hero', icon: faInfoCircle },
    { title: 'Bemutatkozás', keywords: ['bemutatkozás', 'about', 'rólunk', 'rolunk', 'color me crazy'], path: '/', section: 'bemutatkozas', icon: faInfoCircle },
    { title: 'Kapcsolat', keywords: ['kapcsolat', 'contact', 'elérhetőség', 'elerhetoseg', 'cím', 'cim', 'telefon', 'email', 'nemes takács', 'nemes takacs', 'szeged'], path: '/', section: 'kapcsolat', icon: faEnvelope },

    // Szolgáltatások
    { title: 'Szolgáltatások', keywords: ['szolgáltatások', 'szolgaltatasok', 'services', 'varázslatos kártyák', 'varazslatos kartyak'], path: '/szolgaltatasok', icon: faScissors },
    { title: 'Árlista', keywords: ['árlista', 'arlista', 'price', 'ár', 'ar', 'árak', 'arak'], path: '/', section: 'szolgaltatasok', icon: faMoneyBill },
    { title: 'Oktatás', keywords: ['oktatás', 'oktatas', 'education', 'tanfolyam', 'képzés', 'kepzes'], path: '/oktatas', icon: faGraduationCap },

    // Munkatársak
    { title: 'Munkatársak', keywords: ['munkatársak', 'munkatarsak', 'team', 'csapat'], path: '/', section: 'csapat', icon: faUsers },
    { title: 'Felicia - Mester Fodrász', keywords: ['felicia', 'felcsi', 'mester fodrász', 'mester fodrasz', 'tulajdonos'], path: '/csapat/felcsi', icon: faUsers },
    { title: 'Gitta - Fodrász', keywords: ['gitta', 'fodrász', 'fodrasz'], path: '/csapat/gitta', icon: faUsers },
    { title: 'Lili - Fodrász', keywords: ['lili', 'fodrász', 'fodrasz'], path: '/csapat/lili', icon: faUsers },
    { title: 'Anti - Fodrász', keywords: ['anti', 'fodrász', 'fodrasz'], path: '/csapat/anti', icon: faUsers },
    { title: 'Bogi - Kozmetikus', keywords: ['bogi', 'kozmetikus', 'kozmetika'], path: '/csapat/bogi', icon: faUsers },

    // Galéria
    { title: 'Galéria', keywords: ['galéria', 'galeria', 'gallery', 'képek', 'kepek', 'fotók', 'fotok'], path: '/galeria', icon: faImages },
    { title: 'Felicia munkái', keywords: ['felicia galéria', 'felcsi munkái', 'felcsi munkai'], path: '/galeria/felcsi', icon: faImages },
    { title: 'Gitta munkái', keywords: ['gitta galéria', 'gitta munkái', 'gitta munkai'], path: '/galeria/gitta', icon: faImages },
    { title: 'Lili munkái', keywords: ['lili galéria', 'lili munkái', 'lili munkai'], path: '/galeria/lili', icon: faImages },
    { title: 'Anti munkái', keywords: ['anti galéria', 'anti munkái', 'anti munkai'], path: '/galeria/anti', icon: faImages },
    { title: 'Bogi munkái', keywords: ['bogi galéria', 'bogi munkái', 'bogi munkai'], path: '/galeria/bogi', icon: faImages },

    // Értékelések
    { title: 'Értékelések', keywords: ['értékelések', 'ertekelesek', 'reviews', 'vélemények', 'velemenyek'], path: '/', section: 'ertekeles', icon: faStar },

    // Szolgáltatás típusok
    { title: 'Női Hajvágás', keywords: ['női hajvágás', 'noi hajvagas', 'női', 'noi', 'hajvágás', 'hajvagas', 'rövid', 'rovid', 'félhosszú', 'felhosszu', 'hosszú', 'hosszu'], path: '/', section: 'szolgaltatasok', icon: faScissors },
    { title: 'Férfi Hajvágás', keywords: ['férfi hajvágás', 'ferfi hajvagas', 'férfi', 'ferfi', 'szakáll', 'szakall', 'géppel', 'geppel'], path: '/', section: 'szolgaltatasok', icon: faScissors },
    { title: 'Gyerek Hajvágás', keywords: ['gyerek hajvágás', 'gyerek hajvagas', 'gyermek', 'gyerek', 'kis fiú', 'kis fiu', 'kis lány', 'kis lany'], path: '/', section: 'szolgaltatasok', icon: faScissors },
    { title: 'Festés / Színezés', keywords: ['festés', 'festes', 'színezés', 'szinezes', 'hajfestés', 'hajfestes', 'szín', 'szin'], path: '/', section: 'szolgaltatasok', icon: faScissors },
    { title: 'Szőkítés', keywords: ['szőkítés', 'szokites', 'szőkít', 'szokit', 'balayage', 'melír', 'melir', 'tő szőkítés', 'to szokites'], path: '/', section: 'szolgaltatasok', icon: faScissors },
    { title: 'Speciális Szolgáltatások', keywords: ['speciális', 'specialis', 'raszta', 'hajtetoválás', 'hajtetovalas', 'steampod', 'konty', 'frizura'], path: '/', section: 'szolgaltatasok', icon: faScissors },
    { title: 'Kozmetika', keywords: ['kozmetika', 'szempilla', 'szemöldök', 'szemoldok', 'gyantázás', 'gyantazas', 'smink', 'menyasszonyi'], path: '/', section: 'szolgaltatasok', icon: faScissors }
  ];

  // Keresés végrehajtása
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setResults([]);
      return;
    }

    const searchLower = searchTerm.toLowerCase();
    const filtered = searchableContent.filter(item => {
      // Keresés a címben és kulcsszavakban
      return item.title.toLowerCase().includes(searchLower) ||
             item.keywords.some(keyword => keyword.toLowerCase().includes(searchLower));
    });

    setResults(filtered.slice(0, 8)); // Maximum 8 eredmény
  }, [searchTerm]);

  // Eredményre kattintás kezelése
  const handleResultClick = (result) => {
    if (result.section) {
      // Navigálás szekciókhoz
      navigate(result.path);
      setTimeout(() => {
        const element = document.getElementById(result.section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Navigálás oldalakhoz
      navigate(result.path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    onClose();
    setSearchTerm('');
  };

  // ESC gomb kezelése
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
        setSearchTerm('');
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      // Auto focus az input mezőre
      setTimeout(() => {
        const input = document.getElementById('search-input');
        if (input) input.focus();
      }, 100);
    }

    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div className="search-overlay" onClick={onClose}></div>
      <div className="search-modal">
        <div className="search-modal-header">
          <div className="search-input-wrapper">
            <FontAwesomeIcon icon={faSearch} className="search-input-icon" />
            <input
              id="search-input"
              type="text"
              className="search-input"
              placeholder="Keresés az oldalon..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoComplete="off"
            />
          </div>
          <button className="search-close-btn" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="search-results">
          {searchTerm.trim() === '' ? (
            <div className="search-empty">
              <FontAwesomeIcon icon={faSearch} className="search-empty-icon" />
              <p>Kezdj el gépelni a kereséshez...</p>
              <div className="search-hints">
                <span className="search-hint">Szolgáltatások</span>
                <span className="search-hint">Munkatársak</span>
                <span className="search-hint">Galéria</span>
                <span className="search-hint">Árlista</span>
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="search-results-list">
              {results.map((result, index) => (
                <button
                  key={index}
                  className="search-result-item"
                  onClick={() => handleResultClick(result)}
                >
                  <FontAwesomeIcon icon={result.icon} className="search-result-icon" />
                  <span className="search-result-title">{result.title}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="search-empty">
              <FontAwesomeIcon icon={faSearch} className="search-empty-icon" />
              <p>Nincs találat a keresett kifejezésre</p>
              <p className="search-empty-subtitle">Próbálj más kulcsszavakat használni</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchModal;
