import { combineReducers } from 'redux';

import useProductReducers from './product';
import useShoppingCartReducers from './shoppingCart';

const useReducers = () => {
  const { products } = useProductReducers();
  const { shoppingCart } = useShoppingCartReducers();

  return combineReducers({
    products,
    shoppingCart,
  });
};

export default useReducers;
