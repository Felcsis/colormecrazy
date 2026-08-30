import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { SEASONS, SEASON_LOGOS, resolveInitialSeason, STORAGE_KEY } from '../hooks/useSeason';

const SeasonContext = createContext(null);

export const SeasonProvider = ({ children }) => {
  const [season, setSeasonState] = useState(resolveInitialSeason);

  useEffect(() => {
    document.documentElement.setAttribute('data-season', season);
  }, [season]);

  const setSeason = useCallback((next) => {
    if (!SEASONS.includes(next)) return;

    // Rövid ideig lágy átmenet, hogy a kézi váltás ne ugorjon
    const root = document.documentElement;
    root.classList.add('season-switching');
    window.setTimeout(() => root.classList.remove('season-switching'), 600);

    setSeasonState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // tárolás nélkül is működik, csak nem marad meg újratöltésig
    }
  }, []);

  return (
    <SeasonContext.Provider value={{ season, setSeason, logo: SEASON_LOGOS[season] }}>
      {children}
    </SeasonContext.Provider>
  );
};

export const useSeasonContext = () => {
  const ctx = useContext(SeasonContext);
  if (!ctx) {
    // Provider nélkül (pl. izolált teszt) essünk vissza a téli alapra
    return { season: 'tel', setSeason: () => {}, logo: SEASON_LOGOS.tel };
  }
  return ctx;
};
