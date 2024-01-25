import s from './SourceLink.module.css';
import Icon from '../Icon/Icon';

type SourceLinkProps = {
  type: string;
  href: string;
  text: string;
};

export default function SourceLink(props: SourceLinkProps) {
  const { type, href, text } = props;

  return (
    <a className={s.sourcelink} href={href} title={text} target="blank">
      <Icon skill={type} />
      <span>{text}</span>
    </a>
  );
}
