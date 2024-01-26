import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import s from './Footer.module.css';
import SocialLink, {
  SocialLinkProps,
} from 'src/components/UI/SocialLink/SocialLink';

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

  return (
    <>
      <footer className={cn(s.footer, inView && s.inview)}>
        <div className={s.copiright}>©2024 {t('IG')}</div>
        <div className={s.social_links}>
          {socialLinks.map((link) => (
            <SocialLink {...link} key={'social_' + link.skill} />
          ))}
        </div>
      </footer>
      <div ref={ref} className={s.bottom} />
    </>
  );
}
