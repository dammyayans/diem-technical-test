import React, { useMemo } from 'react';
import Stars from '../stars';
import { currencyFormat, getDiscountedPrice } from '../../../utils/currency';
import Button from '../button';
import Badge from '../badge';
import { getBadgeVariant } from '../../../utils/product';
import ProductTags from './tags';

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
  availabilityStatus,
  stock,
  tags,
}) => {
  const discountedPrice = useMemo(
    () => getDiscountedPrice(price, discountPercentage),
    [price, discountPercentage],
  );

  return (
    <section className="mt-10 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-3xl font-bold tracking-tight text-primary">{title}</h1>
      <ProductTags tags={tags} />

      <h2 className="sr-only">Product information</h2>
      <div className="mt-4">
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
          <a
            href="#customer-reviews"
            className="text-sm font-medium text-primary transition-all hover:scale-105"
          >
            See all {reviewCount} reviews
          </a>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-900">Description</h3>

        <p className="space-y-6 text-base text-gray-500 mt-4">{description}</p>
      </div>

      <div className="mt-10">
        <div className="flex mb-3 justify-center">
          <Badge variant={getBadgeVariant(availabilityStatus)} className="animate-pulse">
            {`${availabilityStatus} - Only ${stock} left`}
          </Badge>
        </div>
        <Button>Buy now</Button>
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
