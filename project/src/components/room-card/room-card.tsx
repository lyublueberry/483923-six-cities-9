import ReviewCardScreen from '../review-card/review-card';
import { Reviews } from '../../types/review';
import { Offer } from '../../types/offer';
import CommentSubmissionFormScreen from '../comment-submittion-form/comment-submission-form';

type RoomProps = {
  offer: Offer;
  reviews: Reviews;
}

function RoomCard(props: RoomProps): JSX.Element {
  const { offer, reviews } = props;

  const { bedrooms, description, goods, host, id, images, isPremium, maxAdults, price, rating, title, type } = offer;
  const getCardMarkPremium = () => isPremium ? <div className="place-card__mark"><span>Premium</span></div> : '';
  const getUserStatus = () => host.isPro ? 'Pro' : '';

  return (
    <>
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {
            images.map((image) => (
              <div key={id} className="property__image-wrapper">
                <img className="property__image" src={image} alt="Studio" />
              </div>
            ))
          }
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {getCardMarkPremium()}
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {title}
            </h1>
            <button className="property__bookmark-button button" type="button">
              <svg className="property__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{ width: '80%' }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {bedrooms}
            </li>
            <li className="property__feature property__feature--adults">
              {maxAdults}
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {
                goods.map((good) => (
                  <li key={good} className="property__inside-item">
                    {good}
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
              </div>
              <span className="property__user-name">
                {host.name}
              </span>
              <span className="property__user-status">
                {getUserStatus()}
              </span>
            </div>
            <div className="property__description">
              <p className="property__text">
                {description}
              </p>
              <p className="property__text">
                {description}
              </p>
            </div>
          </div>
          <section className="property__reviews reviews">
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
            <ul className="reviews__list">
              {
                reviews.map((review) => (
                  <ReviewCardScreen key={review.id} review={review} />
                ))
              }
            </ul>
            <CommentSubmissionFormScreen />
          </section>
        </div>
      </div>
    </>
  );
}

export default RoomCard;
