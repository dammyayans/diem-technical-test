export const BASE_URL = 'https://dummyjson.com'; //env

export const API = {
  productDetails: (id) => `${BASE_URL}/products/${id}`,
};

export const getProduct = async (id) => {
  try {
    const response = await fetch(API.productDetails(id));
    const product = await response.json();
    return product;
  } catch (err) {
    //  reporter(err); Sentry, Slack Alert
  }
};
