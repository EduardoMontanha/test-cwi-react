import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/_main.scss';
import 'react-notifications/lib/notifications.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);