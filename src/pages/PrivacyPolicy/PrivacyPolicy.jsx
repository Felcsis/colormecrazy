import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="legal-page-container">
      <div className="legal-content">
        <h1 className="legal-title">{t('privacy.title')}</h1>
        <p className="legal-updated">{t('privacy.lastUpdated')}</p>

        <section className="legal-section">
          <h2>{t('privacy.intro.title')}</h2>
          <p>{t('privacy.intro.text1')}</p>
          <p>{t('privacy.intro.text2')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('privacy.dataController.title')}</h2>
          <p><strong>{t('privacy.dataController.name')}</strong> Color Me Crazy Fodrászat és Kozmetika</p>
          <p><strong>{t('privacy.dataController.address')}</strong> 6000 Kecskemét, Fecske u. 35.</p>
          <p><strong>{t('privacy.dataController.email')}</strong> info@colormecrazykft.hu</p>
          <p><strong>{t('privacy.dataController.phone')}</strong> +36 76 801 135</p>
        </section>

        <section className="legal-section">
          <h2>{t('privacy.dataProcessed.title')}</h2>
          <p>{t('privacy.dataProcessed.intro')}</p>
          <ul className="legal-list">
            <li><strong>{t('privacy.dataProcessed.name')}</strong></li>
            <li><strong>{t('privacy.dataProcessed.email')}</strong></li>
            <li><strong>{t('privacy.dataProcessed.phone')}</strong></li>
            <li><strong>{t('privacy.dataProcessed.appointment')}</strong></li>
            <li><strong>{t('privacy.dataProcessed.technical')}</strong></li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>{t('privacy.purposes.title')}</h2>
          <ul className="legal-list">
            <li>{t('privacy.purposes.item1')}</li>
            <li>{t('privacy.purposes.item2')}</li>
            <li>{t('privacy.purposes.item3')}</li>
            <li>{t('privacy.purposes.item4')}</li>
            <li>{t('privacy.purposes.item5')}</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>{t('privacy.legalBasis.title')}</h2>
          <p>{t('privacy.legalBasis.text1')}</p>
          <ul className="legal-list">
            <li>{t('privacy.legalBasis.consent')}</li>
            <li>{t('privacy.legalBasis.contract')}</li>
            <li>{t('privacy.legalBasis.legitimate')}</li>
            <li>{t('privacy.legalBasis.legal')}</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>{t('privacy.retention.title')}</h2>
          <p>{t('privacy.retention.text1')}</p>
          <ul className="legal-list">
            <li>{t('privacy.retention.appointments')}</li>
            <li>{t('privacy.retention.marketing')}</li>
            <li>{t('privacy.retention.accounting')}</li>
            <li>{t('privacy.retention.technical')}</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>{t('privacy.rights.title')}</h2>
          <p>{t('privacy.rights.intro')}</p>
          <ul className="legal-list">
            <li><strong>{t('privacy.rights.access.title')}</strong> {t('privacy.rights.access.text')}</li>
            <li><strong>{t('privacy.rights.rectification.title')}</strong> {t('privacy.rights.rectification.text')}</li>
            <li><strong>{t('privacy.rights.erasure.title')}</strong> {t('privacy.rights.erasure.text')}</li>
            <li><strong>{t('privacy.rights.restriction.title')}</strong> {t('privacy.rights.restriction.text')}</li>
            <li><strong>{t('privacy.rights.portability.title')}</strong> {t('privacy.rights.portability.text')}</li>
            <li><strong>{t('privacy.rights.objection.title')}</strong> {t('privacy.rights.objection.text')}</li>
            <li><strong>{t('privacy.rights.withdraw.title')}</strong> {t('privacy.rights.withdraw.text')}</li>
          </ul>
          <p>{t('privacy.rights.contact')}</p>
          <p>{t('privacy.rights.complaint')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('privacy.security.title')}</h2>
          <p>{t('privacy.security.text1')}</p>
          <p>{t('privacy.security.text2')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('privacy.recipients.title')}</h2>
          <p>{t('privacy.recipients.text1')}</p>
          <ul className="legal-list">
            <li>{t('privacy.recipients.hosting')}</li>
            <li>{t('privacy.recipients.email')}</li>
            <li>{t('privacy.recipients.accounting')}</li>
            <li>{t('privacy.recipients.authorities')}</li>
          </ul>
          <p>{t('privacy.recipients.text2')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('privacy.cookies.title')}</h2>
          <p>{t('privacy.cookies.text')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('privacy.changes.title')}</h2>
          <p>{t('privacy.changes.text')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('privacy.contact.title')}</h2>
          <p>{t('privacy.contact.text')}</p>
          <p><strong>{t('privacy.contact.email')}</strong> info@colormecrazykft.hu</p>
          <p><strong>{t('privacy.contact.phone')}</strong> +36 76 801 135</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
