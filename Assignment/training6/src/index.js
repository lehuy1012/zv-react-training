import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import App1 from "./task1/App";
import App2 from "./task2/App";

import reducer1  from './task1/redux/reducers';
import rootSaga1  from "./task1/redux/saga/saga";

import reducer2  from './task2/redux/reducers/index';
import rootSaga2  from "./task2/redux/saga/saga";

const sagaMiddleware = createSagaMiddleware();

const store1 = createStore(reducer1, 
  compose( applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

const store2 = createStore(reducer2, 
  compose( applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

sagaMiddleware.run(rootSaga1);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store1}>
      
      <App1/>

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
