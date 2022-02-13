import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  PLACE_COUNT: 6,
};

ReactDOM.render(
  <React.StrictMode>
    <App placesCount={Settings.PLACE_COUNT} />
  </React.StrictMode>,
  document.getElementById('root'));
