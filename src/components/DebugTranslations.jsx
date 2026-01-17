import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { translations } from '../locales';

const DebugTranslations = () => {
  const { t, language } = useTranslation();

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: '#000',
      color: '#0f0',
      padding: '20px',
      borderRadius: '10px',
      fontSize: '12px',
      maxWidth: '400px',
      maxHeight: '300px',
      overflow: 'auto',
      zIndex: 9999,
      fontFamily: 'monospace'
    }}>
      <h3 style={{color: '#fff', margin: '0 0 10px 0'}}>🐛 Translation Debug</h3>
      <p><strong>Current Language:</strong> {language}</p>
      <p><strong>Test t('hero.subtitle'):</strong> {t('hero.subtitle')}</p>
      <p><strong>Test t('navbar.home'):</strong> {t('navbar.home')}</p>
      <hr style={{border: '1px solid #333'}}/>
      <p><strong>Translations object exists:</strong> {translations ? 'YES' : 'NO'}</p>
      <p><strong>HU hero exists:</strong> {translations?.hu?.hero ? 'YES' : 'NO'}</p>
      <p><strong>EN hero exists:</strong> {translations?.en?.hero ? 'YES' : 'NO'}</p>
      <p><strong>HU hero.subtitle:</strong> {translations?.hu?.hero?.subtitle || 'MISSING'}</p>
      <p><strong>EN hero.subtitle:</strong> {translations?.en?.hero?.subtitle || 'MISSING'}</p>
    </div>
  );
};

export default DebugTranslations;
