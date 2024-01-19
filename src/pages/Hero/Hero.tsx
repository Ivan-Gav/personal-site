import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@react-hooks-hub/use-media-query';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import s from './Hero.module.css';
import Btn from 'src/components/UI/Btn/Btn';
import Photo from 'src/components/Photo/Photo';

export default function Hero() {
  const { t } = useTranslation();
  const { device } = useMediaQuery({ debounceDelay: 30 });
  const navigate = useNavigate();

  const handleCTA = () => navigate('cv');

  return (
    <section className={cn(s.hero, device === 'mobile' && s.mobile)}>
      <h2 className={s.hero_title}>
        <span className={s.hero_name}>{t('IG')} </span>
        <br />
        <span className={s.hero_position}>{t('FRONTEND_DEVELOPER')}</span>
      </h2>
      <div className={s.hero_text}>
        <p className={s.hero_slogan}>{t('HERO_SUBTITLE')}</p>
        <p>{t('HERO_MY_STACK')}</p>
        <ul>
          <li>React, Redux, Next JS</li>
          <li>JavaScript, TypeScript</li>
          <li>HTML/CSS, SCSS/SASS</li>
          <li>Responsive design</li>
          <li>RESTful API, GraphQL</li>
          <li>Unit Testing</li>
          <li>Webpack, Vite</li>
        </ul>

        <Btn addClass="hero_btn" onClick={handleCTA}>
          {t('HERO_CTA')}
        </Btn>
      </div>
      <div className={s.hero_pic}>
        <Photo />
      </div>
    </section>
  );
}
