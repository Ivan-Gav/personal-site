import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from 'src/layout/RootLayout';

const Page404 = lazy(() => import('./404/404'));
const CV = lazy(() => import('./CV/CV'));
const Hero = lazy(() => import('./Hero/Hero'));
const Projects = lazy(() => import('./Projects/Projects'));
const ContactPage = lazy(() => import('./Contact/ContactPage'));
const Privacy = lazy(() => import('./Privacy/Privacy'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Page404 />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: 'cv',
        element: <CV />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'privacy',
        element: <Privacy />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
