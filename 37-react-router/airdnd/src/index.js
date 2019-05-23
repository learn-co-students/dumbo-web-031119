import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './global/App';
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root'));