import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@react-hooks-hub/use-media-query';
import cn from 'classnames';
import s from './CV.module.css';
import Card from 'src/components/UI/Card/Card';
import { SKILLS } from 'src/@types/models';

export default function CV() {
  const { t } = useTranslation();
  const { device } = useMediaQuery({ debounceDelay: 30 });

  return (
    <section className={s.cv}>
      <div className={cn(s.cv_box, device === 'mobile' && s.mobile)}>
        <div className={s.cv_exp}>
          <h3 className={s.cv_title}>{t('PROFILE')}</h3>
          <Card
            isProfile
            company={t('IG')}
            position={t('FRONTEND_DEVELOPER')}
            description_key="PROFILE_DESCRIPTION"
            skills={[
              SKILLS.REACT,
              SKILLS.REDUX,

              SKILLS.MATERIALUI,
              SKILLS.GRAPHQL,
              SKILLS.JAVASCRIPT,
              SKILLS.TYPESCRIPT,
              SKILLS.GIT,
              SKILLS.GITHUB,
              SKILLS.WEBPACK,
              SKILLS.VITE,
              SKILLS.VITEST,
              SKILLS.HTML,
              SKILLS.CSS,
              SKILLS.SCSS,
            ]}
          />

          <h3 className={s.cv_title}>{t('EXPERIENCE')}</h3>
          <Card
            fromDate="05.2024"
            toDate={t('PRESENT')}
            company={t('ACEPLACE')}
            location={t('MOSCOW')}
            position={t('FRONTEND_DEVELOPER')}
            description_key="ACEPLACE_DESCRIPTION"
            skills={[
              SKILLS.REACT,
              SKILLS.REDUX,
              SKILLS.NEXTJS,
              SKILLS.JAVASCRIPT,
              SKILLS.TYPESCRIPT,
              SKILLS.GIT,
              SKILLS.GITHUB,
              SKILLS.WEBPACK,
              SKILLS.SCSS,
            ]}
          />
          <Card
            fromDate="01.2024"
            toDate="05.2024"
            company={t('FREELANCE')}
            location={t('MOSCOW')}
            position={t('FRONTEND_DEVELOPER')}
            description_key="FREELANCE_DESCRIPTION"
            skills={[
              SKILLS.REACT,
              SKILLS.REDUX,
              SKILLS.MATERIALUI,
              SKILLS.TAILWIND,
              SKILLS.JAVASCRIPT,
              SKILLS.TYPESCRIPT,
              SKILLS.GIT,
              SKILLS.GITHUB,
              SKILLS.VUE,
              SKILLS.VITE,
              SKILLS.HTML,
              SKILLS.CSS,
            ]}
          />
          <Card
            fromDate="2012"
            toDate="05.2024"
            company="fontan-online.ru"
            location={t('MOSCOW')}
            position={t('IP')}
            description_key="IP_DESCRIPTION"
            skills={[SKILLS.HTML, SKILLS.CSS, SKILLS.OPENCART]}
          />
          <Card
            fromDate="2000"
            toDate="2012"
            company={t('OSKO')}
            location={t('MOSCOW')}
            position={t('OSKO_POSITION')}
            description_key="OSKO_DESCRIPTION"
            skills={[t('SKILLS_SALES'), t('SKILLS_MANAGEMENT')]}
          />
        </div>
        <div className={s.cv_edu}>
          <h3 className={s.cv_title}>{t('EDUCATION')}</h3>
          <Card
            fromDate="10.2023"
            toDate="01.2024"
            company="Rolling Scopes School"
            position={t('FRONTEND_DEVELOPER')}
            description_key="RSS_DESCRIPTION_REACT"
            skills={[
              SKILLS.REACT,
              SKILLS.REDUX,
              SKILLS.NEXTJS,
              SKILLS.MATERIALUI,
              SKILLS.GRAPHQL,
              SKILLS.JAVASCRIPT,
              SKILLS.TYPESCRIPT,
              SKILLS.GIT,
              SKILLS.VITE,
              SKILLS.VITEST,
            ]}
            link={{
              href: 'https://app.rs.school/certificate/gd6t14w7',
              text: `[${t('CERTIFICATE')}]`,
            }}
          />
          <Card
            fromDate="03.2023"
            toDate="10.2023"
            company="Rolling Scopes School"
            position={t('FRONTEND_DEVELOPER')}
            description_key="RSS_DESCRIPTION_JS"
            skills={[
              SKILLS.JAVASCRIPT,
              SKILLS.TYPESCRIPT,
              SKILLS.GIT,
              SKILLS.REACT,
              SKILLS.WEBPACK,
              SKILLS.VITE,
              SKILLS.VITEST,
              SKILLS.SCSS,
              SKILLS.HTML,
              SKILLS.CSS,
            ]}
            link={{
              href: 'https://app.rs.school/certificate/e1mh0dpb',
              text: `[${t('CERTIFICATE')}]`,
            }}
          />
          <Card
            fromDate="1993"
            toDate="1999"
            company={t('MPEI')}
            location={t('MOSCOW')}
            position={t('MPEI_POSITION')}
            description_key="MPEI_DESCRIPTION"
          />
          <h3 className={s.cv_title}>{t('LANGS')}</h3>
          <ul className={s.cv_list}>
            <li>
              <span>{t('LANGS_EN')}</span> - B1+{' '}
              <a
                href="https://englex.ru/certificate/?hash=ykxkVcEF46mqEBeRuBeycHvmvAhvG5Lc0P74QMIgDkZ9iqKBK6hrR2H0CbFCkhdN"
                target="blank"
              >
                [{t('CERTIFICATE')}]
              </a>
            </li>
            <li>
              <span>{t('LANGS_DE')}</span> - B1
            </li>
            <li>
              <span>{t('LANGS_RU')}</span> - {t('LANGS_NATIVE')}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
