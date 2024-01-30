import { useMediaQuery } from '@react-hooks-hub/use-media-query';
import cn from 'classnames';

import { SocialLinkProps } from '../UI/SocialLink/SocialLink';
import ContactLink from '../UI/ContactLink/ContactLink';
import s from './Contacts.module.css';

const DISCORD_HREF = import.meta.env.VITE_DISCORD_HREF;
const DISCORD_TEXT = import.meta.env.VITE_DISCORD_TEXT;
const PHONE_HREF = import.meta.env.VITE_PHONE_HREF;
const PHONE_TEXT = import.meta.env.VITE_PHONE_TEXT;
const EMAIL = import.meta.env.VITE_EMAIL;
const TELEGRAM_HREF = import.meta.env.VITE_TELEGRAM_HREF;
const TELEGRAM_TEXT = import.meta.env.VITE_TELEGRAM_TEXT;

const contactLinks: SocialLinkProps[] = [
  {
    skill: 'Email',
    href: EMAIL,
    text: EMAIL,
  },
  {
    skill: 'Phone',
    href: PHONE_HREF,
    text: PHONE_TEXT,
  },
  {
    skill: 'Telegram',
    href: TELEGRAM_HREF,
    text: TELEGRAM_TEXT,
  },
  {
    skill: 'Discord',
    href: DISCORD_HREF,
    text: DISCORD_TEXT,
  },
];

export default function Contacts() {
  const { device } = useMediaQuery();

  return (
    <div className={cn(s.contacts_list, device === 'mobile' && s.mobile)}>
      {contactLinks.map((link) => (
        <ContactLink
          {...link}
          key={'contact_' + link.skill}
          mobile={device === 'mobile'}
        />
      ))}
    </div>
  );
}
