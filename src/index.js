import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // Use correct filename casing here
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
