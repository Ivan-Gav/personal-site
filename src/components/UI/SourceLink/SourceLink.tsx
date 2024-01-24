import s from './SourceLink.module.css';
import icons from 'src/assets/icons';

type SourceLinkProps = {
  type: string;
  href: string;
  text: string;
};

export default function SourceLink(props: SourceLinkProps) {
  const { type, href, text } = props;

  function Icon() {
    const iconName = type.toUpperCase();

    if (!(iconName in icons)) return null;
    const SVG = icons[iconName as keyof typeof icons];
    return <SVG />;
  }

  return (
    <a className={s.sourcelink} href={href} title={text} target="blank">
      <Icon />
      <span>{text}</span>
    </a>
  );
}
