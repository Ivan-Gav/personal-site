import { NavLink } from 'react-router-dom';
import s from './FooterLink.module.css';

type FooterLinkProps = {
  to: string;
  text: string;
  title?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  onClick?: () => void;
};

export default function FooterLink(props: FooterLinkProps) {
  const { text, to, title, target, onClick } = props;

  return (
    <NavLink
      to={to}
      title={title || text}
      className={s.footer_link}
      target={target || '_self'}
      onClick={onClick}
    >
      {text}
    </NavLink>
  );
}
