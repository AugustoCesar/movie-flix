import { Review } from 'types/review';
import { ReactComponent as StarImage } from 'assets/images/star.svg';

import './styles.css';

type Props = {
  review: Review;
};

const ReviewCard = ({ review }: Props) => {
  return (
    <div className="review-card">
      <h6><StarImage className='star-img'/> {review.user.name}</h6>
      <p>{review.text}</p>
    </div>
  );
};

export default ReviewCard;
