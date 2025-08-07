import { TCategory } from '../interfaces';
import axiosInstance from './axios';

export const searchProductsApi = async (productName: string) => {
  const res = await axiosInstance.get('/products/search', {
    params: { productName: productName },
  });
  return res.data;
};

export const getProductsCategories = async (category: TCategory) => {
  console.log('getProductsCategories called with category:', category);
  const res = await axiosInstance.get(`/products/category/${category}`);
  return res.data;
};
