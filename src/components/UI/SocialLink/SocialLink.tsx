import { SkillName } from 'src/@types/models';
import s from './SocialLink.module.css';
import Icon from '../Icon/Icon';

export type SocialLinkProps = {
  skill: SkillName;
  href: string;
  text?: string;
  mobile?: boolean;
};

export default function SocialLink(props: SocialLinkProps) {
  const { skill, href, text, mobile } = props;

  const prefix =
    skill === 'Email' ? 'mailto:' : skill === 'Phone' ? 'tel:' : '';

  return (
    <a
      className={s.social_link}
      href={prefix + href}
      title={text}
      target="blank"
    >
      <div className={s.link_content_box}>
        <Icon skill={skill} />
        {!mobile && <div className={s.link_text}>{text}</div>}
      </div>
    </a>
  );
}
