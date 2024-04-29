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
import App from './App.jsx';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store.js';

import * as ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from 'react-router-dom';

// function component() {
//   const element = document.createElement('div');
//   element.innerHTML = 'Hello Pink  Fairy Armadillos!';
//   return element;
// }
// document.body.appendChild(component());

const root = createRoot(document.getElementById('root'));
//hello

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
