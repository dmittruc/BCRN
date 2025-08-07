import { IBaseProduct, TCategory } from '..';

export interface ISetSearchProductsCategoriesAction {
  products: IBaseProduct[];
}

export interface ISetLoadingAction {
  loading: boolean;
}

export interface ISetErrorAction {
  error: string | null;
}

export interface ISearchProductsCategoriesAsyncAction {
  category: TCategory;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}
