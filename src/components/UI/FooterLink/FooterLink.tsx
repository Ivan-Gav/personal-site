import { NavLink } from 'react-router-dom';
import s from './FooterLink.module.css';

type FooterLinkProps = {
  to: string;
  text: string;
  title?: string;
};

export default function FooterLink(props: FooterLinkProps) {
  const { text, to, title } = props;

  return (
    <NavLink to={to} title={title || text} className={s.footer_link}>
      {text}
    </NavLink>
  );
}
