import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

ReactDOM.render(
  <React.StrictMode>
    <App data={contacts}/>
  </React.StrictMode>,
  document.getElementById('root')
);
