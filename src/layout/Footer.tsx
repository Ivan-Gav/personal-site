import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@react-hooks-hub/use-media-query';
import cn from 'classnames';
import s from './Footer.module.css';
import SocialLink, {
  SocialLinkProps,
} from 'src/components/UI/SocialLink/SocialLink';
import FooterLink from 'src/components/UI/FooterLink/FooterLink';

const DISCORD_HREF = import.meta.env.VITE_DISCORD_HREF;
const DISCORD_TEXT = import.meta.env.VITE_DISCORD_TEXT;
const PHONE_HREF = import.meta.env.VITE_PHONE_HREF;
const PHONE_TEXT = import.meta.env.VITE_PHONE_TEXT;
const EMAIL = import.meta.env.VITE_EMAIL;
const TELEGRAM_HREF = import.meta.env.VITE_TELEGRAM_HREF;
const TELEGRAM_TEXT = import.meta.env.VITE_TELEGRAM_TEXT;
const GITHUB_HREF = import.meta.env.VITE_GITHUB_HREF;
const GITHUB_TEXT = import.meta.env.VITE_GITHUB_TEXT;

const socialLinks: SocialLinkProps[] = [
  {
    skill: 'Discord',
    href: DISCORD_HREF,
    text: DISCORD_TEXT,
  },
  {
    skill: 'Phone',
    href: PHONE_HREF,
    text: PHONE_TEXT,
  },
  {
    skill: 'Email',
    href: EMAIL,
    text: EMAIL,
  },
  {
    skill: 'Telegram',
    href: TELEGRAM_HREF,
    text: TELEGRAM_TEXT,
  },
  {
    skill: 'GitHub',
    href: GITHUB_HREF,
    text: GITHUB_TEXT,
  },
];

export default function Footer() {
  const [ref, inView] = useInView();
  const { t, i18n } = useTranslation();
  const { device } = useMediaQuery();

  return (
    <>
      <footer
        className={cn(
          s.footer,
          inView && s.inview,
          device === 'tablet' && s.tablet,
          device === 'mobile' && s.mobile
        )}
      >
        <div className={s.footer_links}>
          <FooterLink text={t('CONTACT')} to="/contact" />
          <FooterLink
            text={t('DOWNLOAD_CV')}
            to={`/pdf/Ivan-Gavrilin-FrontEnd-Dev-${i18n.language.toUpperCase()}.pdf`}
            target="_blank"
          />
          <FooterLink text={t('PRIVACY_POLICY')} to="/" />
        </div>
        <div className={s.social_links}>
          {socialLinks.map((link) => (
            <SocialLink
              {...link}
              key={'social_' + link.skill}
              mobile={device === 'mobile'}
            />
          ))}
        </div>
        <div className={s.copyright}>©2024 {t('IG')}</div>
      </footer>
      <div ref={ref} className={s.bottom} />
    </>
  );
}
