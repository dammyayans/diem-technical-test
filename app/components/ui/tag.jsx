import classNames from 'classnames';
import React from 'react';

const Tag = ({ children, className }) => {
  return (
    <span
      className={classNames(
        'inline-flex items-center px-2 py-2 text-base font-medium ring-1 ring-inset bg-white text-primary ring-gray-200 capitalize',
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Tag;
