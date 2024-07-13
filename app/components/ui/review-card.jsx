import React from 'react';
import { UserIcon } from '../icons';
import Stars from './stars';
import { formatDate } from '../../utils/date';
const ReviewCard = ({ className, name, date, rating, comment }) => {
  return (
    <div className={className}>
      <div className="flex">
        <UserIcon className="h-12 w-12 rounded-full text-gray-400" />
        <div className="ml-4">
          <h4 className="text-sm font-bold text-gray-900">{name}</h4>
          <p className="mt-1">
            <time dateTime={date}>{formatDate(date)}</time>
          </p>
          <div className="mt-2">
            <Stars rating={rating} />
            <p className="sr-only">{rating} out of 5 stars</p>
          </div>
          <div className="mt-4 text-gray-500 capitalize">{comment}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
