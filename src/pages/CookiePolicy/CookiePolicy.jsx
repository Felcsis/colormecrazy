import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import '../PrivacyPolicy/PrivacyPolicy.css';

const CookiePolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="legal-page-container">
      <div className="legal-content">
        <h1 className="legal-title">{t('cookie.title')}</h1>
        <p className="legal-updated">{t('cookie.lastUpdated')}</p>

        <section className="legal-section">
          <h2>{t('cookie.intro.title')}</h2>
          <p>{t('cookie.intro.text1')}</p>
          <p>{t('cookie.intro.text2')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('cookie.what.title')}</h2>
          <p>{t('cookie.what.text1')}</p>
          <p>{t('cookie.what.text2')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('cookie.types.title')}</h2>

          <h3>{t('cookie.types.essential.title')}</h3>
          <p>{t('cookie.types.essential.text')}</p>
          <ul className="legal-list">
            <li><strong>{t('cookie.types.essential.language.name')}</strong> {t('cookie.types.essential.language.desc')}</li>
            <li><strong>{t('cookie.types.essential.session.name')}</strong> {t('cookie.types.essential.session.desc')}</li>
          </ul>

          <h3>{t('cookie.types.functional.title')}</h3>
          <p>{t('cookie.types.functional.text')}</p>
          <ul className="legal-list">
            <li><strong>{t('cookie.types.functional.preferences.name')}</strong> {t('cookie.types.functional.preferences.desc')}</li>
          </ul>

          <h3>{t('cookie.types.analytics.title')}</h3>
          <p>{t('cookie.types.analytics.text')}</p>
          <ul className="legal-list">
            <li><strong>{t('cookie.types.analytics.google.name')}</strong> {t('cookie.types.analytics.google.desc')}</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>{t('cookie.duration.title')}</h2>

          <h3>{t('cookie.duration.session.title')}</h3>
          <p>{t('cookie.duration.session.text')}</p>

          <h3>{t('cookie.duration.persistent.title')}</h3>
          <p>{t('cookie.duration.persistent.text')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('cookie.management.title')}</h2>
          <p>{t('cookie.management.text1')}</p>
          <p>{t('cookie.management.text2')}</p>
          <ul className="legal-list">
            <li><strong>Google Chrome:</strong> {t('cookie.management.chrome')}</li>
            <li><strong>Mozilla Firefox:</strong> {t('cookie.management.firefox')}</li>
            <li><strong>Microsoft Edge:</strong> {t('cookie.management.edge')}</li>
            <li><strong>Safari:</strong> {t('cookie.management.safari')}</li>
          </ul>
          <p>{t('cookie.management.text3')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('cookie.thirdParty.title')}</h2>
          <p>{t('cookie.thirdParty.text1')}</p>
          <ul className="legal-list">
            <li><strong>Google Analytics:</strong> {t('cookie.thirdParty.google')}</li>
            <li><strong>Facebook Pixel:</strong> {t('cookie.thirdParty.facebook')}</li>
          </ul>
          <p>{t('cookie.thirdParty.text2')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('cookie.consent.title')}</h2>
          <p>{t('cookie.consent.text1')}</p>
          <p>{t('cookie.consent.text2')}</p>
          <p>{t('cookie.consent.text3')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('cookie.changes.title')}</h2>
          <p>{t('cookie.changes.text')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('cookie.contact.title')}</h2>
          <p>{t('cookie.contact.text')}</p>
          <p><strong>{t('cookie.contact.email')}</strong> info@colormecrazykft.hu</p>
          <p><strong>{t('cookie.contact.phone')}</strong> +36 76 801 135</p>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;
