import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './global/App';
import { BrowserRouter as Router } from "react-router-dom"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'

// 2. Create store
const store = createStore(reducer)


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));