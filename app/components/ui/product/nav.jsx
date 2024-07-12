import { Link } from '@remix-run/react';
import React from 'react';

export const ProductNav = ({ list, title }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ul role="list" className="flex items-center space-x-2">
        {list.map((nav) => (
          <li key={nav}>
            <div className="flex items-center">
              <Link href="/" className="mr-2 text-sm font-medium text-gray-900 capitalize">
                {nav}
              </Link>
              <span aria-hidden="true" className="text-xl text-gray-300">
                /
              </span>
            </div>
          </li>
        ))}
        <li className="text-sm">
          <Link
            href="/"
            aria-current="page"
            className="font-medium text-gray-500 hover:text-gray-600"
          >
            {title}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
