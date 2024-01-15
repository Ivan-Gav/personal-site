import 'src/i18n/i18n';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import s from './Header.module.css';
import ThemeSwitch from 'src/components/ThemeSwitch/ThemeSwitch';
import LangSelect from 'src/components/LangSelect/LangSelect';

export default function Header() {
  const { t } = useTranslation();

  return (
    <header>
      <nav className={s.nav}>
        <NavLink to={'/'}>{t('HOME')}</NavLink>
        <NavLink to={'cv'}>{t('CV')}</NavLink>
        <NavLink to={'projects'}>{t('PROJECTS')}</NavLink>
        <NavLink to={'contact'}>{t('CONTACT')}</NavLink>
        <ThemeSwitch />
        <LangSelect />
      </nav>
    </header>
  );
}
