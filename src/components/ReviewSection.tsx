import React, { useState } from 'react';
import '../styles/ReviewSection.css'; // CSS file for styling

interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number;
  avatar: string;
}

const initialReviews: Review[] = [
  {
    id: 1,
    name: 'Hieu Huu',
    comment:
      'Dedicated and enthusiastic service, always ready to support customer requests. High-quality products and the correct quantity as requested. Highly recommend using On Ideas services! :3',
    rating: 5,
    avatar: '/DUE-web/images/cat.jpeg',
  },
  {
    id: 2,
    name: 'Ngoc Tram',
    comment:
      'Dedicated and enthusiastic service, always ready to support customer requests. High-quality products and the correct quantity as requested. Highly recommend using On Ideas services! :3',
    rating: 4,
    avatar: '/DUE-web/images/cat.jpeg',
  },
];

const ReviewSection: React.FC = () => {
  const [reviews, _] = useState<Review[]>(initialReviews);
  const [newRating, setNewRating] = useState<number>(0);
  const [newComment, setNewComment] = useState<string>('');

  // Handle rating click
  const handleRatingClick = (rating: number) => {
    setNewRating(rating); // Update the selected rating
  };

  // Handle comment input change
  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewComment(event.target.value);
  };

  return (
    <div className="review-section">
      <h2>Product Reviews</h2>
      <div className="review-section-content">
        {/* Left: Review Input Section */}
        <div className="review-input">
          <div className="rating-stars">
            {[...Array(5)].map((_, index) => (
              <i
                key={index}
                className={`fa-solid fa-star ${
                  index < newRating ? 'active' : ''
                }`}
                onClick={() => handleRatingClick(index + 1)}
              ></i>
            ))}
          </div>
          <textarea
            placeholder="Enter your review here..."
            className="review-textarea"
            value={newComment}
            onChange={handleCommentChange}
          ></textarea>
        </div>

        {/* Right: Customer Reviews Section */}
        <div className="customer-reviews">
          {reviews.map((review) => (
            <div key={review.id} className="customer-review">
              <img
                src={review.avatar}
                alt={`${review.name}'s avatar`}
                className="customer-avatar"
              />
              <h4>{review.name}</h4>
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={i < review.rating ? 'active-star' : ''}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
