import { useSelector } from 'react-redux';

import useProductsSelectors from './products';
import useShoppingCartSelectors from './shoppingCart';

const useSelectors = () => {
  return {
    useSelector,
    useProductsSelectors,
    useShoppingCartSelectors,
  };
};

export default useSelectors;
