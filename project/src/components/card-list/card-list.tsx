import OfferCardScreen from '../offer-card/offer-card';
import { Offers } from '../../types/offer';
import { sortOffers } from '../../utils';
import { useAppSelector } from '../../hooks';

type OfferCardListProps = {
  offers: Offers;
  onOfferHover:(id:number) => void;
  classNameCard:string;
}

function OfferCardListScreen({offers, onOfferHover, classNameCard}: OfferCardListProps): JSX.Element {
  const sortType = useAppSelector((state) => state.sortType);

  const sortedOffers = sortOffers(offers, sortType);
  return (
    <> {
      sortedOffers.map((offer) => <OfferCardScreen classNameCard={classNameCard} key={offer.id} offer={offer} onOfferHover={onOfferHover} />)
    }
    </>
  );

}

export default OfferCardListScreen;
