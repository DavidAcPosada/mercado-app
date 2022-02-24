import useHelpers from 'helpers';
import { Action, Product } from 'interfaces';
import useModels from 'models';

const useShoppingCartReducers = () => {
  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  const { useInitialStates, useTypes } = useModels();
  const { useShoppingCartInitialState } = useInitialStates();
  const { shoppingCartInitialState } = useShoppingCartInitialState();

  const { useShoppingCartTypes } = useTypes();
  const { UPDATE_SHOPPING_CART, ADD_PRODUCT, DELETE_SHOPPING_CART } =
    useShoppingCartTypes();

  type ShoppingCartState = typeof shoppingCartInitialState;

  const shoppingCart = createReducer(shoppingCartInitialState, {
    [UPDATE_SHOPPING_CART](
      state: ShoppingCartState,
      action: Action<Product[]>
    ) {
      return [...(action.payload ?? [])];
    },
    [ADD_PRODUCT](state: ShoppingCartState, action: Action<Product[]>) {
      // @ts-ignore
      return [...state, action.payload];
    },
    [DELETE_SHOPPING_CART]() {
      return [];
    },
  });

  return { shoppingCart };
};

export default useShoppingCartReducers;
