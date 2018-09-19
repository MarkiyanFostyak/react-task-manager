import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App/App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import AppReducer from './App/reducers/AppReducer';

const store = createStore(AppReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
 