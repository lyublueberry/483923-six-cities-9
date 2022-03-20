import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { store } from './store';

const Settings = {
  PLACE_COUNT: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App placesCount={Settings.PLACE_COUNT} offers={offers} />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root'));
