import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@react-hooks-hub/use-media-query';
import cn from 'classnames';

import s from './Header.module.css';
import HeaderLink from 'src/components/UI/HeaderLink/HeaderLink';
import ThemeSwitch from 'src/components/ThemeSwitch/ThemeSwitch';
import LangSelect from 'src/components/LangSelect/LangSelect';
import Burger from 'src/components/UI/Burger/Burger';
import Drawer from 'src/components/UI/Drawer/Drawer';
import { useScrollLock } from 'src/hooks/useScrollLock';

export default function Header() {
  const [ref, inView] = useInView();
  const { device } = useMediaQuery();
  const { t } = useTranslation();

  function DesktopNav() {
    return (
      <nav className={s.desktop_nav}>
        <HeaderLink to={'/'} title={t('HOME')}>
          {t('HOME')}
        </HeaderLink>
        <HeaderLink to={'cv'}>{t('CV')}</HeaderLink>
        <HeaderLink to={'projects'}>{t('PROJECTS')}</HeaderLink>
        <HeaderLink to={'contact'}>{t('CONTACT')}</HeaderLink>
      </nav>
    );
  }

  function TabletNav() {
    const [active, setActive] = useState(false);
    const location = useLocation();
    const { lockScroll, unlockScroll } = useScrollLock();

    const onBurgerClick = () => setActive((prev) => !prev);
    const onOverlayClick = (e: React.MouseEvent) => {
      e.preventDefault();
      if (!active) {
        return;
      }
      if (e.target === e.currentTarget) {
        setActive(false);
      }
    };

    useEffect(() => {
      setActive(false);
    }, [location.pathname]);

    useEffect(() => {
      if (active) {
        lockScroll();
      } else {
        unlockScroll();
      }
    }, [active, lockScroll, unlockScroll]);

    return (
      <>
        <Burger active={active} onClick={onBurgerClick} />
        <Drawer isOpen={active} onClick={onOverlayClick}>
          <nav className={s.tablet_nav}>
            <HeaderLink to={'/'}>{t('HOME')}</HeaderLink>
            <HeaderLink to={'cv'}>{t('CV')}</HeaderLink>
            <HeaderLink to={'projects'}>{t('PROJECTS')}</HeaderLink>
            <HeaderLink to={'contact'}>{t('CONTACT')}</HeaderLink>
          </nav>
        </Drawer>
      </>
    );
  }

  return (
    <>
      <div ref={ref} className={s.top} />
      <header className={cn(s.header, !inView && s.sticky)}>
        {!(device === 'mobile') ? <DesktopNav /> : <TabletNav />}
        <div className={s.side_controls}>
          <ThemeSwitch />
          <LangSelect />
        </div>
      </header>
    </>
  );
}
