import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from 'src/layout/RootLayout';
import Page404 from './404/404';
import CV from './CV/CV';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';

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
        element: <h1>Get in touch with me</h1>,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
