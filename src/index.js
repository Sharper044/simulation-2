/*This is my main shell for this webpage. In here I will import the necissary pagages to run react, redux, and routing*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
import store from './store';
import './reset.css';

ReactDOM.render(
  <HashRouter>
    <Provider store={ store }>
      <App />
    </Provider>
  </HashRouter>, document.getElementById('root'));