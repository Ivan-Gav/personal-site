import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import s from './HeaderLink.module.css';

type HeaderLinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
};

export default function HeaderLink(props: HeaderLinkProps) {
  const { children, to, title } = props;

  const location = useLocation();
  const className = classNames(
    s.navlink,
    (location.pathname === `/${to}` || location.pathname === to) && s.active
  );

  return (
    <NavLink to={to} title={title || ''} className={className}>
      {children}
    </NavLink>
  );
}
