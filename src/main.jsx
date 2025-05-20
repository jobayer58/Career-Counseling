import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayouts from './Layouts/HomeLayouts';
import Error from './components/Error';
import Home from './components/Home';
import About from './components/About';
import AuthLayout from './Layouts/AuthLayout';
import Login from './page/Login';
import Register from './page/Register';
import AuthProvider from './provider/AuthProvider';
import ServiceDetails from './components/ServiceDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PrivateProfile from './PrivateRoute/PrivateProfile';
import Blog from './components/Blog';
import UpdateProfile from './components/UpdateProfile';
import ForgetPassword from './components/ForgetPassword';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <PrivateProfile></PrivateProfile>
          </PrivateRoute>
        )
      },
      {
        path: '/update',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: '/forget',
        element: <ForgetPassword></ForgetPassword>
      }

    ]
  },
  {
    path: '/service/:id',
    element:
      <PrivateRoute>
        <ServiceDetails></ServiceDetails>
      </PrivateRoute>,
    loader: () => fetch(`/careerData.json`)
  },
  {
    path: 'auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      }
    ]
  }

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
