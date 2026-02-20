import { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import s from './Privacy.module.css';
import Fallback from 'src/components/Fallback/Fallback';

const PolicyRU = lazy(() => import('./PolicyRU'));
const PolicyEN = lazy(() => import('./PolicyEN'));
const PolicyDE = lazy(() => import('./PolicyDE'));

export default function Privacy() {
  const { i18n } = useTranslation();

  const Policy = () => {
    switch (i18n.language) {
      case 'ru':
        return <PolicyRU />;

      case 'en':
        return <PolicyEN />;

      case 'de':
        return <PolicyDE />;

      default:
        return <PolicyEN />;
    }
  };

  return (
    <main className={s.privacy_container}>
      <Suspense fallback={<Fallback />}>
        <Policy />
      </Suspense>
    </main>
  );
}
