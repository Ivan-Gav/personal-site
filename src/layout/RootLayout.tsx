import { Suspense } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import s from './RootLayout.module.css';

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className={s.main}>
        <Suspense fallback={<h2>Loading...</h2>}>
          <ScrollRestoration />
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
