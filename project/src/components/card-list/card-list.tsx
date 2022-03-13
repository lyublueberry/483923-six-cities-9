import OfferCardScreen from '../offer-card/offer-card';
import { Offers } from '../../types/offer';

type OfferCardListProps = {
  offers: Offers;
  onOfferHover:(id:number) => void;
}

function OfferCardListScreen({offers, onOfferHover}: OfferCardListProps): JSX.Element {

  return (
    <div className='cities__places-list places__list tabs__content'> {
      offers.map((offer) => <OfferCardScreen key={offer.id} offer={offer} onOfferHover={onOfferHover} />)
    }
    </div>
  );

}

export default OfferCardListScreen;
