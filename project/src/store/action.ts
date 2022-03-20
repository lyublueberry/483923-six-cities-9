import {createAction} from '@reduxjs/toolkit';
import {City, Offer} from '../types/offer';

export const changeCity = createAction<City>('city/change');
export const fillListOffers = createAction<Offer[]>('fillListOffers');
