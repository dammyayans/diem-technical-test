import React from 'react';

import ReviewCard from '../review-card';

export const ProductCustomerReviews = ({ reviews }) => {
  return (
    <section id="customer-reviews" className="mx-auto max-w-2xl py-16 sm:py-24">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
        Customer Reviews
      </h2>

      <div className="mt-16">
        <h3 className="sr-only">Recent reviews</h3>

        {/* <div className="flow-root"> */}
        <div className="-my-12 divide-y divide-gray-200">
          {reviews.map((review, reviewIdx) => (
            <ReviewCard
              key={`review-${reviewIdx}`}
              className="py-12"
              name={review.reviewerName}
              date={review.date}
              rating={review.rating}
              comment={review.comment}
            />
          ))}
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};
