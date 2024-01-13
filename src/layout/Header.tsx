import { NavLink } from 'react-router-dom';

import s from './Header.module.css';
import ThemeSwitch from 'src/components/ThemeSwitch/ThemeSwitch';

export default function Header() {
  return (
    <header>
      <nav className={s.nav}>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'cv'}>CV</NavLink>
        <NavLink to={'projects'}>Projects</NavLink>
        <NavLink to={'contact'}>Contact</NavLink>
        <ThemeSwitch />
      </nav>
    </header>
  );
}
