// import { HeaderLink } from 'react-router-dom';
import HeaderLink from 'src/components/UI/HeaderLink/HeaderLink';
import { useTranslation } from 'react-i18next';

import s from './Header.module.css';
import ThemeSwitch from 'src/components/ThemeSwitch/ThemeSwitch';
import LangSelect from 'src/components/LangSelect/LangSelect';
import Home from 'src/assets/icons/home.svg?react';

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className={s.header}>
      <div className={s.home_link}>
        <HeaderLink to={'/'} title={t('HOME')}>
          <Home />
        </HeaderLink>
      </div>
      <nav className={s.nav}>
        <HeaderLink to={'cv'}>{t('CV')}</HeaderLink>
        <HeaderLink to={'projects'}>{t('PROJECTS')}</HeaderLink>
        <HeaderLink to={'contact'}>{t('CONTACT')}</HeaderLink>
      </nav>
      <div className={s.side_controls}>
        <ThemeSwitch />
        <LangSelect />
      </div>
    </header>
  );
}
