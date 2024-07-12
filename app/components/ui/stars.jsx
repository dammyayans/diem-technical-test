import classNames from 'classnames';
import React from 'react';
import { StarIcon } from '../icons';

const Stars = ({ rating = 5 }) => {
  return (
    <div className="flex items-center">
      {[0, 1, 2, 3, 4].map((_, index) => (
        <StarIcon
          key={`stars-${index}`}
          aria-hidden="true"
          className={classNames(
            rating > _ ? 'text-yellow-400' : 'text-gray-200',
            'h-5 w-5 flex-shrink-0',
          )}
        />
      ))}
    </div>
  );
};

export default Stars;
