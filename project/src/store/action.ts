import {createAction} from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

export const changeCityAction = createAction<string>('city/change');
export const fillListOffersAction = createAction<Offer[]>('fillListOffers');
export const changeSortType = createAction<string>('sort/change');
