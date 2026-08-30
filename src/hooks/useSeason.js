// Évszakok sorrendben – a színvilág kapcsoló is ebben a sorrendben listázza őket
export const SEASONS = ['tavasz', 'nyar', 'osz', 'tel'];

export const SEASON_LABELS = {
  tavasz: { hu: 'Tavasz', en: 'Spring' },
  nyar: { hu: 'Nyár', en: 'Summer' },
  osz: { hu: 'Ősz', en: 'Autumn' },
  tel: { hu: 'Tél', en: 'Winter' }
};

// Évszakonkénti logóváltozatok – mind a négy azonos méretarányra igazítva
// (a tél az oldal eredeti logója)
export const SEASON_LOGOS = {
  tavasz: '/images/logo-tavasz.webp',
  nyar: '/images/logo-nyar.webp',
  osz: '/images/logo-osz.webp',
  tel: '/images/logo-tel.webp'
};

export const STORAGE_KEY = 'cmc-season';

// Naptári évszak a hónap alapján (meteorológiai határok:
// tavasz 03.01., nyár 06.01., ősz 09.01., tél 12.01.)
export const getSeasonForDate = (date = new Date()) => {
  const month = date.getMonth() + 1;
  if (month >= 3 && month <= 5) return 'tavasz';
  if (month >= 6 && month <= 8) return 'nyar';
  if (month >= 9 && month <= 11) return 'osz';
  return 'tel';
};

// A kezdeti évszak: URL paraméter (?evszak=nyar) > korábbi kézi választás > dátum.
// Ugyanez a sorrend fut az index.html-be ágyazott szkriptben is, hogy az első
// festéskor már a helyes paletta legyen érvényben.
export const resolveInitialSeason = () => {
  if (typeof window === 'undefined') return getSeasonForDate();

  try {
    const fromUrl = new URLSearchParams(window.location.search).get('evszak');
    if (fromUrl && SEASONS.includes(fromUrl)) return fromUrl;

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && SEASONS.includes(stored)) return stored;
  } catch {
    // privát böngészés vagy letiltott tárolás – marad a dátum szerinti
  }

  return getSeasonForDate();
};
