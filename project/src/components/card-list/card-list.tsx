import OfferCardScreen from '../offer-card/offer-card';
import { Offers } from '../../types/offer';

type OfferCardListProps = {
  offers: Offers;
}

function OfferCardListScreen(props: OfferCardListProps): JSX.Element {
  const { offers } = props;

  return (
    <div className='cities__places-list places__list tabs__content'> {
      offers.map((offer) => <OfferCardScreen key={offer.id} offer={offer} />)
    }
    </div>
  );

}

export default OfferCardListScreen;
