import React from 'react';
import { GlobalIcon, BadgeIcon, CartIcon, ShieldIcon } from '../../icons';

export const ProductPolicies = ({
  warrantyInformation,
  shippingInformation,
  availabilityStatus,
  stock,
  returnPolicy,
}) => {
  const policies = [
    {
      name: 'Warranty Information',
      description: warrantyInformation,
      icon: BadgeIcon,
    },
    {
      name: 'Shipping Information',
      description: shippingInformation,
      icon: GlobalIcon,
    },
    {
      name: 'Availability Status',
      description: `${availabilityStatus} (${stock} left)`,
      icon: CartIcon,
    },
    {
      name: 'Return Policy',
      description: returnPolicy,
      icon: ShieldIcon,
    },
  ];

  return (
    <section className="mt-10 border-t border-gray-200 pt-8">
      <h2 className="text-base font-medium text-gray-900">Our Policies</h2>

      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-4">
        {policies.map((policy) => (
          <div
            key={policy.name}
            className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
          >
            <dt>
              <policy.icon
                aria-hidden="true"
                className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
              />
              <span className="mt-4 text-sm font-medium text-gray-900">{policy.name}</span>
            </dt>
            <dd className="mt-1 text-sm text-gray-500">{policy.description}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};
