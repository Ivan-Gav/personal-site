import { Suspense } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import s from './RootLayout.module.css';
import Header from './Header';
import Footer from './Footer';
import SideTab from 'src/components/SideTab/SideTab';

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className={s.main}>
        <Suspense fallback={<h2>Loading...</h2>}>
          <ScrollRestoration />
          <Outlet />
          <SideTab />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
