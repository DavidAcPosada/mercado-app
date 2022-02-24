import useHelpers from 'helpers';
import { Product } from 'interfaces/products';
import { Action } from 'interfaces/redux';
import useModels from 'models';

const useProductReducers = () => {
  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  const { useInitialStates, useTypes } = useModels();

  const { useProductsInitialState } = useInitialStates();
  const { productsInitialState } = useProductsInitialState();

  const { useProductTypes } = useTypes();
  const { GET_PRODUCTS } = useProductTypes();

  type ProductReducerState = typeof productsInitialState;

  const products = createReducer(productsInitialState, {
    [GET_PRODUCTS](state: ProductReducerState, action: Action<Array<Product>>) {
      return action.payload;
    },
  });

  return { products };
};

export default useProductReducers;
