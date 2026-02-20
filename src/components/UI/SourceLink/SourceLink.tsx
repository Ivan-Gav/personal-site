import s from './SourceLink.module.css';
import Icon from '../Icon/Icon';

type SourceLinkProps = {
  skill: string;
  href: string;
  text: string;
};

export default function SourceLink(props: SourceLinkProps) {
  const { skill, href, text } = props;

  return (
    <a className={s.sourcelink} href={href} title={text} target="blank">
      <Icon skill={skill} />
      <span>{text}</span>
    </a>
  );
}
