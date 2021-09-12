import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomeModal1 from './task1/Features/HomeModal';
import HomeModal2 from './task2/Features/HomeModal';
import HomeTask3 from "./task3/Features/Home";

ReactDOM.render(
  <React.StrictMode>
    <HomeTask3/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
