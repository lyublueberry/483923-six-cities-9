import { createReducer } from '@reduxjs/toolkit';
import { AutorizationStatus, nameCities, SortType } from '../const';
import { Offer } from '../types/offer';
import { changeCityAction, changeSortType, fillListOffersAction, getLogin, loadOffers, requireAuthorization } from './action';

type InitialState = {
  currentCity: string,
  offers: Offer[],
  sortType: string,
  isDataLoaded:boolean,
  authorizationStatus:AutorizationStatus,
  login:string,
};

const initialState:InitialState = {
  currentCity: nameCities[0],
  authorizationStatus: AutorizationStatus.Unknown,
  sortType: SortType.POPULAR,
  isDataLoaded:false,//показываем прелоадер
  offers: [],
  login:'',
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
    })
    .addCase(loadOffers, (state, action)=> {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action)=> {
      state.authorizationStatus = action.payload;
    })
    .addCase(getLogin, (state, action) => {
      state.login = action.payload;
    });
});

export { reducer };
