import classNames from 'classnames';
import React from 'react';

const Button = ({ children, className, ...rest }) => {
  return (
    <button
      className={classNames(
        'flex w-full flex-1 items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
