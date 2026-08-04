import { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import s from './Privacy.module.css';
import Fallback from 'src/components/Fallback/Fallback';

const PolicyRU = lazy(() => import('./PolicyRU'));
const PolicyEN = lazy(() => import('./PolicyEN'));
const PolicyDE = lazy(() => import('./PolicyDE'));

function renderPolicy(language: string) {
  switch (language) {
    case 'ru':
      return <PolicyRU />;

    case 'de':
      return <PolicyDE />;

    default:
      return <PolicyEN />;
  }
}

export default function Privacy() {
  const { i18n } = useTranslation();

  return (
    <main className={s.privacy_container}>
      <Suspense fallback={<Fallback />}>{renderPolicy(i18n.language)}</Suspense>
    </main>
  );
}
