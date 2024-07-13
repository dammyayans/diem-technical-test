import React from 'react';
import { GlobalIcon, BadgeIcon, CartIcon, ShieldIcon } from '../../icons';
import PolicyCard from '../policy-card';

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
          <PolicyCard
            key={policy.name}
            name={policy.name}
            description={policy.description}
            icon={
              <policy.icon
                aria-hidden="true"
                className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
              />
            }
          />
        ))}
      </dl>
    </section>
  );
};
