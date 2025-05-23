// main.route.tsx
import ClientLayout from '../layouts/client';
import HomePage from '../pages/home/HomePage';
import { type RouteObject } from 'react-router-dom';
import Register from '../pages/register/Register';

export const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <ClientLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'register', element: <Register /> },
      // { path: 'login', element: <Login /> },
    ],
  },
];
