// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Correct import path if App.js is in the same directory

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
