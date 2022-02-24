import { Product } from './products';

export interface Action<T> {
  type: string;
  payload?: T;
}

export interface GlobalState {
  products: Product[];
}
