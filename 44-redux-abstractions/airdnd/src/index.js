import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './global/App';
import { BrowserRouter as Router } from "react-router-dom"
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './reducer'

const store = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));