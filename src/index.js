import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import StateLessComponent from './component/StateLessComponent';
// import StateFullComponent from './container/StateFullComponent';
// import YoutubeComp from './component/YoutubeComp/YoutubeComp';
import Home from './container/Home/Home';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <Home />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
