export type TCategory = 'liquids' | 'devices' | 'parts' | 'disposables';

export interface IBaseProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  category: TCategory;
  image?: string;
}

export interface LiquidProduct extends IBaseProduct {}
