import { SortType } from './const';
import { Offer } from './types/offer';

export const getCurrentOffers = (currenCity: string, offersList: Offer[]) => offersList.filter(({ city }) => city.name === currenCity);

export const sortOffers = (offers: Offer[], sortType: string) => {
  switch (sortType) {
    case SortType.POPULAR:
      return offers;
    case SortType.PRICE_HIGH:
      return offers.sort((a, b) => a.price - b.price);
      break;
    case SortType.PRICE_LOW:
      return offers.sort((a, b) => b.price - a.price);
      break;
    case SortType.TOP_RATED:
      return offers.sort((a, b) => b.rating - a.rating);
      break;
    default: return offers;
  }
};
