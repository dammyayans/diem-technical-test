import React from 'react';
import { UserIcon } from '../../icons';
import Stars from '../stars';
import { formatDate } from '../../../utils/date';

export const ProductCustomerReviews = ({ reviews }) => {
  return (
    <section className="mx-auto max-w-2xl py-16 sm:py-24">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
        Customer Reviews
      </h2>

      <div className="mt-16">
        <h3 className="sr-only">Recent reviews</h3>

        {/* <div className="flow-root"> */}
        <div className="-my-12 divide-y divide-gray-200">
          {reviews.map((review, reviewIdx) => (
            <div key={`review-${reviewIdx}`} className="py-12">
              <div className="flex">
                <UserIcon className="h-12 w-12 rounded-full text-gray-400" />
                <div className="ml-4">
                  <h4 className="text-sm font-bold text-gray-900">{review.reviewerName}</h4>
                  <p className="mt-1">
                    <time dateTime={review.date}>{formatDate(review.date)}</time>
                  </p>
                  <div className="mt-2">
                    <Stars rating={review.rating} />
                    <p className="sr-only">{review.rating} out of 5 stars</p>
                  </div>
                  <div className="mt-4 text-gray-500 capitalize">{review.comment}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};
