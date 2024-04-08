import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import s from './404.module.css';

export default function Page404() {
  const { t } = useTranslation();

  return (
    <main className={s.main}>
      <h1>{t('PAGE_NOT_FOUND')}</h1>
      <Link to={'/'}>{t('RETURN_HOME')}</Link>
    </main>
  );
}
