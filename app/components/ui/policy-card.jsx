import React from 'react';

const PolicyCard = ({ name, description, icon }) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
      <dt>
        {icon}
        <span className="mt-4 text-sm font-medium text-gray-900">{name}</span>
      </dt>
      <dd className="mt-1 text-sm text-gray-500">{description}</dd>
    </div>
  );
};

export default PolicyCard;
