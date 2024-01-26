import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@react-hooks-hub/use-media-query';
import cn from 'classnames';
import s from './Footer.module.css';
import SocialLink, {
  SocialLinkProps,
} from 'src/components/UI/SocialLink/SocialLink';
import FooterLink from 'src/components/UI/FooterLink/FooterLink';

const socialLinks: SocialLinkProps[] = [
  {
    skill: 'Discord',
    href: 'https://discordapp.com/users/1081264866641326080',
    text: 'Ivan G (@ivan-gav)',
  },
  {
    skill: 'Phone',
    href: '+74956650335',
    text: '+7(495)665-0-335',
  },
  {
    skill: 'Email',
    href: 'gavrilin.ivan.v@gmail.com',
    text: 'gavrilin.ivan.v@gmail.com',
  },
  {
    skill: 'Telegram',
    href: 'https://t.me/too_old_to_code',
    text: 'too_old_to_code',
  },
  {
    skill: 'GitHub',
    href: 'https://github.com/Ivan-Gav',
    text: 'Ivan-Gav',
  },
];

export default function Footer() {
  const [ref, inView] = useInView();
  const { t } = useTranslation();
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
          <FooterLink text={t('DOWNLOAD_CV')} to="/" />
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
