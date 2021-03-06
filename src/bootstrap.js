import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import Home from './components/home';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(compose(window.devToolsExtension ? window.devToolExtension() : f => f)(createStore));

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Home />
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
