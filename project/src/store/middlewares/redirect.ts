import { Middleware } from '@reduxjs/toolkit';
import { Action } from '../action';
import browserHistory from '../../browser-history';
import { reducer } from '../reducer';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === Action.REDIRECT_TO_ROUTE) {
          browserHistory.push(action.payload);
        }
        return next(action);
      };

