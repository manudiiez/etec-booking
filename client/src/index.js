import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthContextProvider } from './context/AuthContext.js';
import { ThemeProvider } from "styled-components";
import {theme} from './theme/theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AuthContextProvider>
);
