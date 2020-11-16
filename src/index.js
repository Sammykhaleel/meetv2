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
atatus.config('82e6a2eb55024e3b9d19bfc892ba2c18').install();
