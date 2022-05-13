import { createAction } from '@reduxjs/toolkit';
import { AutorizationStatus } from '../const';
import { Offer } from '../types/offer';
const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  FILL_LIST_OFFERS: 'FILL_LIST_OFFERS',
  CHANGE_SORT_TYPE: 'CHAGE_SORT_TYPE',
};
export const changeCityAction = createAction<string>(Action.CHANGE_CITY);
export const fillListOffersAction = createAction<Offer[]>(Action.FILL_LIST_OFFERS);
export const changeSortType = createAction<string>(Action.CHANGE_SORT_TYPE);
export const loadOffers = createAction<Offer[]>('data/loadAction');
export const requireAuthorization = createAction<AutorizationStatus>('user/requireAuthorization');
export const setError = createAction<string>('data/error');
