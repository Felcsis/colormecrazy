import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from '../../hooks/useTranslation';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="section about" id="bemutatkozas">
      <div className="container">
        <h2 className="section-title">{t('about.title')}</h2>

        {/* Story Section */}
        <div className="about-story">
          <div className="story-header">
            <FontAwesomeIcon icon={faHeart} className="story-icon" />
            <h3 className="story-title">{t('about.storyTitle')}</h3>
          </div>

          <div className="story-content">
            <div className="story-year">{t('about.year2018')}</div>
            <p className="story-text" dangerouslySetInnerHTML={{ __html: t('about.paragraph1') }} />
            <p className="story-text" dangerouslySetInnerHTML={{ __html: t('about.paragraph2') }} />
            <p className="story-text" dangerouslySetInnerHTML={{ __html: t('about.paragraph3') }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
