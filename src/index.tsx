import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'tachyons'
import GuestHome from './pages/GuestHome';
import UserHome from './pages/UserHome';
import AdminHome from './pages/AdminHomeBooks';

import Login from './pages/Login';
import Register from './pages/Register';

import AdminHomeUsers from './pages/AdminHomeUsers';
import EditModelForm from './components/AdminComponents/EditModelForm';
import AdminHomeBooks from './pages/AdminHomeBooks';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AdminHomeUsers />
  </React.StrictMode>
);
