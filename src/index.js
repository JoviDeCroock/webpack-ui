import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import styles from './global.module';

render((
  <App />
), document.getElementById('app'));