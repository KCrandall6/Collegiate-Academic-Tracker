import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import App from './App.jsx';


// ReactDOM.render(
//   <h1>Collegiate Academic Tracker</h1>,
//   document.getElementById('root')
// );

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
