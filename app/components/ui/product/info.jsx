import React, { useMemo } from 'react';
import Stars from '../stars';
import { currencyFormat, getDiscountedPrice } from '../../../utils/currency';
import { Link } from '@remix-run/react';

export const ProductInfo = ({
  title,
  price,
  discountPercentage,
  rating,
  description,
  reviewCount,
  dimensions,
  weight,
  minimumOrderQuantity,
}) => {
  const discountedPrice = useMemo(
    () => getDiscountedPrice(price, discountPercentage),
    [price, discountPercentage],
  );

  return (
    <section className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-3xl font-bold tracking-tight text-primary">{title}</h1>

      <h2 className="sr-only">Product information</h2>
      <div className="mt-3">
        <p className="text-3xl tracking-tight text-primary">
          {discountedPrice ? (
            <span>
              {currencyFormat(discountedPrice)}
              <span className="text-2xl text-gray-500 ml-2 line-through">
                {currencyFormat(price)}
              </span>
            </span>
          ) : (
            currencyFormat(price)
          )}
        </p>
      </div>

      {/* Reviews */}
      <div className="mt-3 flex items-center">
        <h3 className="sr-only">Reviews</h3>
        <Stars rating={rating} />
        <div aria-hidden="true" className="ml-3 text-sm text-gray-300">
          ·
        </div>
        <div className="ml-3 flex">
          <Link
            href="#reviews"
            className="text-sm font-medium text-primary transition-all hover:scale-105"
          >
            See all {reviewCount} reviews
          </Link>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-900">Description</h3>

        <p className="space-y-6 text-base text-gray-500 mt-4">{description}</p>
      </div>

      <div className="mt-10">
        <button className="flex w-full flex-1 items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full">
          Buy now
        </button>
      </div>

      <div className="mt-10 border-t border-gray-200 pt-10">
        <h3 className="text-base font-medium text-gray-900">Details</h3>
        <div className="mt-4">
          <ul role="list" className="pl-4 list-disc text-gray-500 text-sm">
            {dimensions && (
              <li>
                {`Dimensions - ${dimensions.width} x ${dimensions.height} x ${dimensions.height}`}
              </li>
            )}
            {weight && <li>{`Weight - ${weight}kg`}</li>}
            {minimumOrderQuantity && (
              <li>{`Minimum Order Quantity - ${minimumOrderQuantity}`}</li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};
