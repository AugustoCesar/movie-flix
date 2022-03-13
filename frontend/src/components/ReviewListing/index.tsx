import ReviewCard from 'components/ReviewCard';
import { Review } from 'types/review';

import './styles.css';

type Props = {
  reviews: Review[];
};

const ReviewListing = ({ reviews }: Props) => {
  console.log(reviews);
  return (
    <div className="base-card listing-container">
      {reviews.map((review) => (
        <div key={review.id}>
          <ReviewCard review={review} />
        </div>
      ))}
    </div>
  );
};

export default ReviewListing;
