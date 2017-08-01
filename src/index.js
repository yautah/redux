import React from 'react';
import ReactDom from 'react-dom';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import Counter from './reducers/counter.js';
import App from './containers/app.jsx';
import CounterEffects from './effects/counter.js';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(Counter, applyMiddleware( thunk, sagaMiddleware, logger()));

sagaMiddleware.run(CounterEffects);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);




