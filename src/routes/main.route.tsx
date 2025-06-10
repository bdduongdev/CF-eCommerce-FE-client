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
import FormInfor from '../components/profile/FormInfor';
import Address from '../components/profile/Address';
import ChangePassword from '../components/profile/ChangePassword';
import VerifyEmail from '../pages/register/VerifyEmail';
import ForgotPassword from '../components/profile/ForgotPassword';


export const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <ClientLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/products', element: <Product /> },
      { path: '/products/:id', element: <ProductDetail /> },
      {
        path: '/profile',
        element: <Profile />,
        children: [
          { index: true, element: <FormInfor /> },
          { path: 'address', element: <Address /> },
          // { path: 'orders', element: <MyOrders /> },
          { path: 'change-password', element: <ChangePassword /> },
          { path: 'forgot-password', element: <ForgotPassword /> },
        ],
      },
      { path: '/contact', element: <Contact /> },
      { path: '/wishlist', element: <Wishlist /> },
      { path: '/cart', element: <Cart /> },
      { path: '/checkout', element: <Checkout /> },


      //auth
      { path: 'register', element: <Register /> },
      { path: 'verify-email', element: <VerifyEmail /> },
      { path: 'login', element: <Login /> },
    ],
  },
];
