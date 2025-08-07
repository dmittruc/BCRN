import { IBaseProduct } from '..';

export interface IProductsCategoriesReducerState {
  products: IBaseProduct[];
  error: any;
  loading: boolean;
}
