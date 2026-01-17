import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { translations } from '../locales';

export const useTranslation = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];

    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        console.warn(`Translation missing: ${key} in ${language}`);
        // Fallback to Hungarian
        let fallbackValue = translations.hu;
        for (const fk of keys) {
          fallbackValue = fallbackValue?.[fk];
          if (fallbackValue === undefined) {
            return key; // Return the key itself if even Hungarian is missing
          }
        }
        return fallbackValue;
      }
    }

    return value;
  };

  return { t, language, setLanguage };
};
