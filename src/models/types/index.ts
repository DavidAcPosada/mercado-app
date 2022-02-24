import useProductTypes from './product';
import useShoppingCartTypes from './shoppingCart';

const useTypes = () => {
  return { useProductTypes, useShoppingCartTypes };
};

export default useTypes;
