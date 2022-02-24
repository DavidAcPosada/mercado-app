import { Dispatch } from 'redux';

import { Action, Product, ShoppingCartElement } from 'interfaces';
import useModels from 'models';

const useShoppingCartActions = () => {
  const { useTypes } = useModels();
  const { useShoppingCartTypes } = useTypes();
  const { ADD_PRODUCT, UPDATE_SHOPPING_CART, DELETE_SHOPPING_CART } =
    useShoppingCartTypes();

  const actAddProductShoppingCart =
    (item: Product) => (dispatch: Dispatch<Action<ShoppingCartElement>>) => {
      dispatch({
        type: ADD_PRODUCT,
        payload: {
          quantity: 1,
          product: item,
        },
      });
    };

  const actUpdateProductShoppingCart =
    (items: ShoppingCartElement[]) =>
    (dispatch: Dispatch<Action<ShoppingCartElement[]>>) => {
      dispatch({
        type: UPDATE_SHOPPING_CART,
        payload: items,
      });
    };

  const actRemoveShoppingCart =
    () => (dispatch: Dispatch<Action<ShoppingCartElement[]>>) => {
      dispatch({
        type: DELETE_SHOPPING_CART,
      });
    };

  return {
    actAddProductShoppingCart,
    actUpdateProductShoppingCart,
    actRemoveShoppingCart,
  };
};

export default useShoppingCartActions;
