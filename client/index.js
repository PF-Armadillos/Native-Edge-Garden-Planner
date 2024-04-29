/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description entry point for application. Hangs React app off of #contents in index.html
 *
 * ************************************
 */
import React from 'react';
import '../styles.css';
import App from './app.jsx';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store.js';

// function component() {
//   const element = document.createElement('div');
//   element.innerHTML = 'Hello Pink  Fairy Armadillos!';
//   return element;
// }
// document.body.appendChild(component());

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
