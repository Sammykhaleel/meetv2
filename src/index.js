import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import * as atatus from 'atatus-spa';

ReactDOM.render(
  <React.StrictMode>
    <h1>Wats Poppin</h1>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
atatus.config('96f8281730c84f039e45d82fe97a3a6d').install();
atatus.notify(new Error('Test Atatus Setup'));
