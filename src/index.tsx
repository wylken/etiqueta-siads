import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import {App} from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement 
);
root.render(
  <React.StrictMode>
      <Helmet>
        <title>Etiqueta SIADS</title>
      </Helmet>
    <App />
  </React.StrictMode>
);


