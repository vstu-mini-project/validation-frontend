import React from 'react';
import ReactDOM from 'react-dom';
import PersonalPageComponent from './components/PersonalPage/PersonalPageComponent';
import HeaderComponent from './components/Header/HeaderComponent';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <HeaderComponent/>
    <PersonalPageComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
