import '../styles.css';
import App from './app.jsx';
import React from 'react';
import { createRoot } from 'react-dom/client';

// function component() {
//   const element = document.createElement('div');
//   element.innerHTML = 'Hello Pink  Fairy Armadillos!';
//   return element;
// }
// document.body.appendChild(component());

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
,);