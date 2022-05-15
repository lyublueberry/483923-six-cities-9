import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { redirect } from './middlewares/redirect';
import { reducer } from './reducer';

export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,//спец поле куда запишем объект и будет доступно в асинхронном действии
      },
    }).concat(redirect),
});// конфигурируем хранилище (RTK)
