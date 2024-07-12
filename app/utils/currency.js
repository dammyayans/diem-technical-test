export const currencyFormat = (amount, currency = 'GBP') =>
  Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency,
  }).format(amount);

export const getDiscountedPrice = (originalPrice, discountPercentage) => {
  if (!originalPrice || !discountPercentage) {
    return 0;
  }

  const discountAmount = (originalPrice * discountPercentage) / 100;
  const discountedPrice = originalPrice - discountAmount;
  return discountedPrice;
};
