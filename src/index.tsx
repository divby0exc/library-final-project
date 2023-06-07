import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'tachyons'
import GuestHome from './pages/GuestHome';
import UserHome from './pages/UserHome';
import AdminHome from './pages/AdminHome';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AdminHome />
  </React.StrictMode>
);
