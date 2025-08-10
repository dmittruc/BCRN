import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getProductsCategories } from '../../api/productsApi';
import {
  ISearchProductsCategoriesAsyncAction,
  ISetErrorAction,
  ISetLoadingAction,
  ISetSearchProductsCategoriesAction,
} from '../../interfaces/actions/searchProductsCategoriesActions';

export const setSearchProductsCategoriesAction =
  createAction<ISetSearchProductsCategoriesAction>(
    'products/setSearchProductsCategoriesAction',
  );

export const setErrorAction = createAction<ISetErrorAction>(
  'products/setErrorAction',
);

export const setLoadingAction = createAction<ISetLoadingAction>(
  'products/setLoadingAction',
);

export const getSearchProductsCategoriesAsyncAction = createAsyncThunk<
  void,
  ISearchProductsCategoriesAsyncAction
>(
  'products/getSearchProductsCategoriesAsyncAction',
  async ({ category }: ISearchProductsCategoriesAsyncAction, { dispatch }) => {
    try {
      dispatch(setSearchProductsCategoriesAction({ products: null }));
      dispatch(setLoadingAction({ loading: true }));
      const res = await getProductsCategories(category);
      const products = res.products;
      console.log(products);
      dispatch(setSearchProductsCategoriesAction({ products: products }));
      dispatch(setErrorAction({ error: null }));
    } catch (e: any) {
      dispatch(setErrorAction({ error: e }));
      console.log(
        'productsActions::getSearchProductsCategoriesAsyncAction error:',
        e,
      );
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  },
);
