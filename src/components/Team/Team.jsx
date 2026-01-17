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
import { useTranslation } from '../../hooks/useTranslation';

// Team members metadata (images, icons, etc.) - language-independent data
const teamMembersConfig = [
  {
    id: 'felicia',
    image: '/images/Felcsi.webp',
    featured: true,
    mysticIcon: faHatWizard
  },
  {
    id: 'gitta',
    image: '/images/Gitta.webp',
    mysticIcon: faSun,
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
    image: '/images/Lili.webp',
    mysticIcon: faWandMagicSparkles,
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
    image: '/images/Anti.webp',
    mysticIcon: faCut,
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
    image: '/images/Bogi.webp',
    isKozmetikus: true,
    mysticIcon: faGem
  }
];

const Team = () => {
  const { t } = useTranslation();

  return (
    <section className="section csapat" id="csapat">
      <div className="container">
        <h2 className="section-title">{t('team.title')}</h2>
        <p className="section-subtitle">
          {t('team.subtitle')}
        </p>
        <div className="team-grid">
          {teamMembersConfig.map((member, index) => {
            const name = t(`team.members.${member.id}.name`);
            const role = t(`team.members.${member.id}.role`);
            const arcana = t(`team.members.${member.id}.arcana`);

            return (
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
                  <img src={member.image} alt={`${name} - ${role}`} />
                </div>
                <div className="team-info">
                  <h3>{name}</h3>
                  <span className="team-role">
                    {role}
                  </span>
                  <div className="arcana-name">{arcana}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
