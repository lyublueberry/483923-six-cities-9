import { createReducer } from '@reduxjs/toolkit';
import { nameCities } from '../const';
import { offers } from '../mocks/offers';
import { changeCityAction, fillListOffersAction } from './action';

const initialState = {
  currentCity: nameCities[0],
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(fillListOffersAction, (state, action)=> {
      state.offers = action.payload;
    });
});

export { reducer };
