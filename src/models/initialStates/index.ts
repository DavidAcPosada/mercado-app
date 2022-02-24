import useProductsInitialState from './products';
import useShoppingCartInitialState from './shoppingCart';

const useInitialStates = () => {
  return { useProductsInitialState, useShoppingCartInitialState };
};

export default useInitialStates;
