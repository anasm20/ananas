// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css'; // Kommentiere diese Zeile aus oder entferne sie, wenn index.css nicht benötigt wird.
import App from './App';
import reportWebVitals from './reportWebVitals';
// In der index.js oder App.js
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
