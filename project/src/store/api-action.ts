import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRouter, AppRoute, AutorizationStatus } from '../const';
import { api } from '../store';
import { Offers } from '../types/offer';
import { store } from '../store';
import { loadOffers, redirectToRoute, requireAuthorization } from './action';
import { AuthData } from '../types/auth-data';
import { UserData } from './user-data';
import { dropToken, saveToken } from '../services/token';
import { errorHandle } from '../services/error-handle';


export const fetchOffersAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    try {
      const { data } = await api.get<Offers>(APIRouter.Offers);
      store.dispatch(loadOffers(data));
    }
    catch (error) {
      errorHandle(error);
    }
  },
);
//проверка авторизованы или нет
export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(APIRouter.Login);
      store.dispatch(requireAuthorization(AutorizationStatus.Auth));
    }
    catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AutorizationStatus.NoAuth));
    }
  },
);

//для логина, когда пользователь ввел логин/пароль
export const loginAction = createAsyncThunk(
  'user/login',
  async ({ login: email, password }: AuthData) => {
    try {
      const { data: { token } } = await api.post<UserData>(APIRouter.Login, { email, password });
      saveToken(token);
      store.dispatch(requireAuthorization(AutorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Root));
    }
    catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AutorizationStatus.NoAuth));
    }
  },
);

//когда выходим из закрытой части приложения

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRouter.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AutorizationStatus.NoAuth));
    }
    catch (error) {
      errorHandle(error);
    }

  },
);
