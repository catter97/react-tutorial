import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {
  applyMiddleware, createStore, combineReducers, compose,
} from 'redux';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { routerMiddleware, routerReducer } from 'react-router-redux';

import AppRouter from 'AppRouter';
import reducers from 'reducers';

const browserHistory = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(browserHistory)];

const store = createStore(
  combineReducers({ ...reducers, routing: routerReducer }),
  compose(applyMiddleware(...middlewares)),
);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <AppRouter />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
