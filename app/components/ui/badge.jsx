import classNames from 'classnames';
import React from 'react';

const Badge = ({ children, variant = 'default', className }) => {
  return (
    <span
      className={classNames(
        'inline-flex items-center rounded-md px-2 py-1 text-base font-medium ring-1 ring-inset',
        variant === 'default' && 'bg-gray-50 text-gray-600 ring-gray-500/10',
        variant === 'danger' && 'text-red-700 bg-red-50 ring-red-600/10',
        variant === 'success' && 'text-green-700 bg-green-50 ring-green-600/20',
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
