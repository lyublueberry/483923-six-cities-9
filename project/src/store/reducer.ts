import { createReducer } from '@reduxjs/toolkit';
import { nameCities, SortType } from '../const';
import { offers } from '../mocks/offers';
import { changeCityAction, changeSortType, fillListOffersAction } from './action';

const initialState = {
  currentCity: nameCities[0],
  offers: offers,
  sortType: SortType.POPULAR,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(fillListOffersAction, (state, action)=> {
      state.offers = action.payload;
    })
    .addCase(changeSortType, (state, action)=> {
      state.sortType = action.payload;
    });
});

export { reducer };
