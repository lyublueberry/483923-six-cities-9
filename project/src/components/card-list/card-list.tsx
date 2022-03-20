import OfferCardScreen from '../offer-card/offer-card';
import { Offers } from '../../types/offer';

type OfferCardListProps = {
  offers: Offers;
  onOfferHover:(id:number) => void;
  classNameCard:string;
}

function OfferCardListScreen({offers, onOfferHover, classNameCard}: OfferCardListProps): JSX.Element {

  return (
    <> {
      offers.map((offer) => <OfferCardScreen classNameCard={classNameCard} key={offer.id} offer={offer} onOfferHover={onOfferHover} />)
    }
    </>
  );

}

export default OfferCardListScreen;
