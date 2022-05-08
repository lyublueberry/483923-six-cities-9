import { Offer } from './types/offer';

export const getCurrentOffers = (currenCity:string, offersList:Offer[]) => offersList.filter(({city}) => city.name === currenCity);
