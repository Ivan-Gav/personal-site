import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from 'src/layout/RootLayout';
import Page404 from './404/404';
import CV from './CV/CV';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Page404 />,
    children: [
      {
        index: true,
        element: <h1>Hi, I&apos;m Ivan</h1>,
      },
      {
        path: 'cv',
        element: <CV />,
      },
      {
        path: 'projects',
        element: <h1>My Projects</h1>,
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
