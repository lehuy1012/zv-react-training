import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store2 from './task2/redux/stored';

import { Provider } from "react-redux";
import App1 from "./task1/pages/HomePage";
import App2 from "./task2/App";
import reducer  from './task1/redux/reducers/index';
import mySaga  from "./task1/redux/saga/saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, 
  compose( applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

sagaMiddleware.run(mySaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      
      <App1/>

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
