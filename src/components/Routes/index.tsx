import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../../App';

import Login from '../../pages/Login';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Login />
);
