import React from 'react';
import { ProductNav } from './nav';
import { ProductImageGallery } from './image-gallery';
import { ProductInfo } from './info';
import { ProductPolicies } from './policies';
import { ProductCustomerReviews } from './customer-reviews';

const Product = ({ product }) => {
  const {
    availabilityStatus,
    category,
    brand,
    description,
    dimensions,
    discountPercentage,
    images,
    minimumOrderQuantity,
    price,
    rating,
    returnPolicy,
    reviews,
    shippingInformation,
    sku,
    stock,
    tags,
    title,
    warrantyInformation,
    weight,
  } = product;
  return (
    <div>
      <ProductNav title={title} list={[category, brand]} />
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        <ProductImageGallery images={images} alt={title} />
        <div>
          <ProductInfo
            title={title}
            price={price}
            rating={rating}
            description={description}
            reviewCount={reviews.length}
            discountPercentage={discountPercentage}
            dimensions={dimensions}
            weight={weight}
            stock={stock}
            availabilityStatus={availabilityStatus}
            minimumOrderQuantity={minimumOrderQuantity}
            tags={tags}
          />
          <ProductPolicies
            availabilityStatus={availabilityStatus}
            returnPolicy={returnPolicy}
            shippingInformation={shippingInformation}
            stock={stock}
            warrantyInformation={warrantyInformation}
          />
        </div>
      </div>
      <ProductCustomerReviews reviews={reviews} />
    </div>
  );
};

export default Product;
