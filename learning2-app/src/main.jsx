import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import {LoginPage} from './components/pages/Login';
import {RegisterPage} from './components/pages/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><a href="/Login">Goto Login</a> <br />
    <a href="/Register">Goto Register</a></div>,
  },
  {
    path: "/Login",
    element: <LoginPage/>,
  },
  {
    path: "/Register",
    element: <RegisterPage/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
