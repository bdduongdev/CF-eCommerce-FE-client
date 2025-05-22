// main.route.tsx
import ClientLayout from '../layouts/client';
import HomePage from '../pages/home/HomePage';
import { type RouteObject } from 'react-router-dom';

export const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <ClientLayout />,
    children: [
      { index: true, element: <HomePage /> },
      // { path: 'about', element: <AboutPage /> },
    ],
  },
];
