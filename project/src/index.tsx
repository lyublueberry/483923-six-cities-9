import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import ErrorMessage from './components/error-message/errorMessage';
import { store } from './store';
import { fetchOffersAction } from './store/api-action';

store.dispatch(fetchOffersAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage/>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root'));
