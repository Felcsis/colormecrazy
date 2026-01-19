import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import '../PrivacyPolicy/PrivacyPolicy.css';

const TermsAndConditions = () => {
  const { t } = useTranslation();

  return (
    <div className="legal-page-container">
      <div className="legal-content">
        <h1 className="legal-title">{t('terms.title')}</h1>
        <p className="legal-updated">{t('terms.lastUpdated')}</p>

        <section className="legal-section">
          <h2>{t('terms.general.title')}</h2>
          <p>{t('terms.general.text1')}</p>
          <p><strong>{t('terms.general.name')}</strong> Color Me Crazy Fodrászat és Kozmetika Kft.</p>
          <p><strong>{t('terms.general.address')}</strong> 6000 Kecskemét, Fecske u. 35.</p>
          <p><strong>{t('terms.general.email')}</strong> info@colormecrazykft.hu</p>
          <p><strong>{t('terms.general.phone')}</strong> +36 76 801 135</p>
          <p><strong>{t('terms.general.taxNumber')}</strong> 26442695-1-03</p>
          <p>{t('terms.general.text2')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('terms.services.title')}</h2>
          <p>{t('terms.services.text1')}</p>
          <ul className="legal-list">
            <li>{t('terms.services.item1')}</li>
            <li>{t('terms.services.item2')}</li>
            <li>{t('terms.services.item3')}</li>
            <li>{t('terms.services.item4')}</li>
            <li>{t('terms.services.item5')}</li>
            <li>{t('terms.services.item6')}</li>
          </ul>
          <p>{t('terms.services.text2')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('terms.booking.title')}</h2>
          <p>{t('terms.booking.text1')}</p>
          <p>{t('terms.booking.text2')}</p>
          <p>{t('terms.booking.text3')}</p>
          <ul className="legal-list">
            <li><strong>{t('terms.booking.phone.title')}</strong> {t('terms.booking.phone.text')}</li>
            <li><strong>{t('terms.booking.email.title')}</strong> {t('terms.booking.email.text')}</li>
            <li><strong>{t('terms.booking.website.title')}</strong> {t('terms.booking.website.text')}</li>
            <li><strong>{t('terms.booking.person.title')}</strong> {t('terms.booking.person.text')}</li>
          </ul>
          <p>{t('terms.booking.text4')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('terms.cancellation.title')}</h2>
          <p>{t('terms.cancellation.text1')}</p>
          <p>{t('terms.cancellation.text2')}</p>
          <p>{t('terms.cancellation.text3')}</p>
          <p>{t('terms.cancellation.text4')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('terms.prices.title')}</h2>
          <p>{t('terms.prices.text1')}</p>
          <p>{t('terms.prices.text2')}</p>
          <p>{t('terms.prices.text3')}</p>
          <p>{t('terms.prices.text4')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('terms.payment.title')}</h2>
          <p>{t('terms.payment.text1')}</p>
          <ul className="legal-list">
            <li>{t('terms.payment.cash')}</li>
            <li>{t('terms.payment.card')}</li>
            <li>{t('terms.payment.transfer')}</li>
          </ul>
          <p>{t('terms.payment.text2')}</p>
          <p>{t('terms.payment.text3')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('terms.serviceExecution.title')}</h2>
          <p>{t('terms.serviceExecution.text1')}</p>
          <p>{t('terms.serviceExecution.text2')}</p>
          <p>{t('terms.serviceExecution.text3')}</p>
          <p>{t('terms.serviceExecution.text4')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('terms.clientObligations.title')}</h2>
          <ul className="legal-list">
            <li>{t('terms.clientObligations.item1')}</li>
            <li>{t('terms.clientObligations.item2')}</li>
            <li>{t('terms.clientObligations.item3')}</li>
            <li>{t('terms.clientObligations.item4')}</li>
            <li>{t('terms.clientObligations.item5')}</li>
            <li>{t('terms.clientObligations.item6')}</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>{t('terms.liability.title')}</h2>
          <p>{t('terms.liability.text1')}</p>
          <p>{t('terms.liability.text2')}</p>
          <p>{t('terms.liability.text3')}</p>
          <p>{t('terms.liability.text4')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('terms.complaints.title')}</h2>
          <p>{t('terms.complaints.text1')}</p>
          <p>{t('terms.complaints.text2')}</p>
          <p>{t('terms.complaints.text3')}</p>
          <p>{t('terms.complaints.text4')}</p>
          <p><strong>{t('terms.complaints.authority')}</strong> Békés Megyei Kereskedelmi és Iparkamara Békéltető Testülete</p>
          <p><strong>{t('terms.complaints.address')}</strong> 5600 Békéscsaba, Penza ltp. 5.</p>
          <p><strong>{t('terms.complaints.email')}</strong> bekelteto@bmkik.hu</p>
        </section>

        <section className="legal-section">
          <h2>{t('terms.dataProtection.title')}</h2>
          <p>{t('terms.dataProtection.text1')}</p>
          <p>{t('terms.dataProtection.text2')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('terms.intellectual.title')}</h2>
          <p>{t('terms.intellectual.text1')}</p>
          <p>{t('terms.intellectual.text2')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('terms.forceMajeure.title')}</h2>
          <p>{t('terms.forceMajeure.text')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('terms.changes.title')}</h2>
          <p>{t('terms.changes.text1')}</p>
          <p>{t('terms.changes.text2')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('terms.jurisdiction.title')}</h2>
          <p>{t('terms.jurisdiction.text')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('terms.contact.title')}</h2>
          <p>{t('terms.contact.text')}</p>
          <p><strong>{t('terms.contact.email')}</strong> info@colormecrazykft.hu</p>
          <p><strong>{t('terms.contact.phone')}</strong> +36 76 801 135</p>
          <p><strong>{t('terms.contact.address')}</strong> 6000 Kecskemét, Fecske u. 35.</p>
        </section>

        <section className="legal-section">
          <h2>{t('terms.effective.title')}</h2>
          <p>{t('terms.effective.text')}</p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
