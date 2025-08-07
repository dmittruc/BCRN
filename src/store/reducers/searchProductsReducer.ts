import { createReducer } from '@reduxjs/toolkit';
import { IProductsCategoriesReducerState } from '../../interfaces/reducers/searchProductsCategoriesReducer';
import { setLoadingAction } from '../actions/authActions';
import {
  setErrorAction,
  setSearchProductsCategoriesAction,
} from '../actions/searchProductsCategoriesActions';

const initialState: IProductsCategoriesReducerState = {
  products: [],
  loading: false,
  error: undefined,
};
const productsReducer = createReducer<IProductsCategoriesReducerState>(
  initialState,
  builder =>
    builder
      .addCase(
        setSearchProductsCategoriesAction,
        (store, { payload: { products } }) => ({
          ...store,
          products: products,
        }),
      )
      .addCase(setErrorAction, (store, { payload: { error } }) => ({
        ...store,
        error: error,
      }))
      .addCase(setLoadingAction, (store, { payload: { loading } }) => ({
        ...store,
        loading: loading,
      })),
);

export default productsReducer;
