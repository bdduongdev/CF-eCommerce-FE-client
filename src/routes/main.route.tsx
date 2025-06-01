// main.route.tsx
import ClientLayout from '../layouts/client';
import HomePage from '../pages/home/HomePage';
import { type RouteObject } from 'react-router-dom';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import ProductDetail from '../pages/productdetail/ProductDetail';
import Cart from '../pages/cart/Cart';
import Product from '../pages/product/Product';
import Profile from '../pages/profile/Profile';
import Contact from '../pages/contact/Contact';
import Checkout from '../pages/checkout/Checkout';
import Wishlist from '../pages/wishlist/Wishlist';


export const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <ClientLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/products', element: <Product /> }, 
      { path: '/product', element: <ProductDetail /> }, // /product/:id 
      { path: '/profile', element: <Profile /> },
      { path: '/contact', element: <Contact /> },
      { path: '/wishlist', element: <Wishlist /> },
      { path: '/cart', element: <Cart /> },
      { path: '/checkout', element: <Checkout /> },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
    ],
  },
];
