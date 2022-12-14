import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthContextProvider } from './context/AuthContext.js';
/* -------------------------------- BOOTSTRAP ------------------------------- */
import 'bootstrap/dist/css/bootstrap.min.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
