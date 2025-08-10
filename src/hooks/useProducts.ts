import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IBaseProduct, TCategory } from '../interfaces';
import { TAppDispatch, TRootState } from '../store';
import { getSearchProductsCategoriesAsyncAction } from '../store/actions/searchProductsCategoriesActions';

const useProducts = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const products = useSelector<TRootState, IBaseProduct[] | undefined>(
    (state: TRootState) => state.products.products,
  );

  const loading = useSelector<TRootState, boolean>(
    (state: TRootState) => state.products.loading,
  );

  const error = useSelector<TRootState, string | null>(
    (state: TRootState) => state.products.error,
  );

  const getProductsCategories = React.useCallback((category: TCategory) => {
    dispatch(getSearchProductsCategoriesAsyncAction({ category: category }));
  }, []);

  return {
    products,
    loading,
    error,
    getProductsCategories,
  };
};

export default useProducts;
