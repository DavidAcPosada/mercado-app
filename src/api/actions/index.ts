import { useDispatch } from 'react-redux';

import useProductActions from './products';
import useShoppingCartActions from './shoppingCart';

const useActions = () => {
  const dispatch = useDispatch();
  return {
    dispatch,
    useProductActions,
    useShoppingCartActions,
  };
};

export default useActions;
