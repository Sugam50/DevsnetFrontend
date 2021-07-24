import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import{LoginProvider} from './Store'

import {
  BrowserRouter as Router,
} from "react-router-dom";

ReactDOM.render(
  <LoginProvider>
  <Router>
    <App />
  </Router>
  </LoginProvider>
 ,
  document.getElementById('root')
);

