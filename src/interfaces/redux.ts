import { Product } from './products';
import { ShoppingCartElement } from './shoppingCart';

export interface Action<T> {
  type: string;
  payload?: T;
}

export interface GlobalState {
  products: Product[];
  shoppingCart: ShoppingCartElement[];
}
