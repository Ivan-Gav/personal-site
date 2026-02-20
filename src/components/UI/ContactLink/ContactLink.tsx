import s from './ContactLink.module.css';
import Icon from '../Icon/Icon';
import { SocialLinkProps } from '../SocialLink/SocialLink';

export default function ContactLink(props: SocialLinkProps) {
  const { skill, href, text } = props;

  const prefix =
    skill === 'Email' ? 'mailto:' : skill === 'Phone' ? 'tel:' : '';

  return (
    <a
      className={s.contact_link}
      href={prefix + href}
      title={text}
      target="blank"
    >
      <div className={s.link_content_box}>
        <Icon skill={skill} />
        <div className={s.link_text}>{text}</div>
      </div>
    </a>
  );
}
