const BASE_URL = "https://d9b6-172-86-194-100.ngrok-free.app";
const USER_SERVICE_ROUTE = "v1/user";
const PRODUCT_ROUTE = "v1/product";

export const API_URLS = {
  login: `${BASE_URL}/${USER_SERVICE_ROUTE}/auth/login`,
  register: `${BASE_URL}/${USER_SERVICE_ROUTE}/auth/register`,
  refreshToken: `${BASE_URL}/${USER_SERVICE_ROUTE}/auth/refresh-token`,
  allProducts: `${BASE_URL}/${PRODUCT_ROUTE}/all-products`,
  addProduct: `${BASE_URL}/${PRODUCT_ROUTE}/add`,
  // Add other endpoints as needed
};
