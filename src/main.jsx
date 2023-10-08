import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Signup from './SignUp/SignUp';
import Login from './Components/Login/Login';
import Booking from './Components/Booking/booking';
import PrivateRaute from './Components/PrivateRaute/PrivateRaute';
import Allservices from './Components/AllServices/Allservices';
import Details from './Components/Details/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/register",
        element: <Signup></Signup>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/booking",
        element: <PrivateRaute><Booking></Booking></PrivateRaute> 

      },
      {
        path: "/services",
        element: <PrivateRaute><Allservices></Allservices></PrivateRaute> 
      },
      {
        path: "/services/details/:id",
        element: <Details></Details>
      }
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
