import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Header from './Components/Header/Header';
import Errorinfos from './Components/Errorinfos/Errorinfos';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import PrivateRaute from './Components/PrivateRaute/PrivateRaute';
import Booking from './Components/Booking/Booking';
import Allservices from './Components/AllServices/Allservices';
import Details from './Components/Details/Details';
import Login from './Components/Login/Login';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    errorElement: <Errorinfos></Errorinfos>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/register",
        element: <SignUp></SignUp>
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
        element: <PrivateRaute><Details></Details></PrivateRaute> ,
        loader: () => fetch('/services.json')
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
