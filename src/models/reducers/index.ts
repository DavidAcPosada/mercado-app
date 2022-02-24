import { combineReducers } from 'redux';

import useProductReducers from './product';

const useReducers = () => {
  const { products } = useProductReducers();

  return combineReducers({
    products,
  });
};

export default useReducers;
