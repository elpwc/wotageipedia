import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import appconfig from './appconfig';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={appconfig.root}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
