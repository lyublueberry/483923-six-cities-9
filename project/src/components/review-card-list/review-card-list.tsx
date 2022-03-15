import { Review } from '../../types/review';
import { reviews } from '../../mocks/reviews';
import ReviewCardScreen from '../review-card/review-card';

function ReviewCardList(): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((reviewItem: Review) => (
        <ReviewCardScreen review={reviewItem} key={reviewItem.id} />
      ))}
    </ul>);
}
export default ReviewCardList;
