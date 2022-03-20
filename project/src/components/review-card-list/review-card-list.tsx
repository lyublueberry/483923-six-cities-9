import { Review } from '../../types/review';
import { reviews } from '../../mocks/reviews';
import ReviewCardScreen from '../review-card/review-card';

function ReviewCardList(): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot;<span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review: Review) => (
          <ReviewCardScreen review={review} key={review.id} />
        ))}
      </ul>
    </>
  );
}
export default ReviewCardList;
