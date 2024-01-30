import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@react-hooks-hub/use-media-query';

import cn from 'classnames';
import s from './SideTab.module.css';
import Arrow from 'src/assets/icons/triangarrow.svg?react';

export default function SideTab() {
  const [expanded, setExpanded] = useState(true);
  const [animated, setAnimated] = useState(true);
  const { t, i18n } = useTranslation();
  const { device } = useMediaQuery();

  useEffect(() => {
    const firstTime = setTimeout(() => {
      setAnimated(false);
      clearTimeout(firstTime);
    }, 3000);
  }, []);

  if (device === 'mobile') {
    return null;
  }

  const text = t('DOWNLOAD_CV');

  return (
    <div
      className={cn(s.sidetab, expanded && s.expanded, animated && s.animated)}
    >
      <button
        title={expanded ? t('HIDE') : t('EXPAND')}
        className={cn(s.opener, expanded && s.expanded)}
        onClick={() => setExpanded((prev) => !prev)}
      >
        <Arrow />
      </button>
      <Link
        title={text}
        className={s.actionbtn}
        onClick={() => setExpanded(false)}
        to={`pdf/Ivan-Gavrilin-FrontEnd-Dev-${i18n.language.toUpperCase()}.pdf`}
        target="_blank"
        reloadDocument
      >
        {text}
      </Link>
    </div>
  );
}
