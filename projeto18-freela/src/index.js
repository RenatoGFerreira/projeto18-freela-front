import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './assets/css/GlobalStyle.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyle/>
  </React.StrictMode>
);
