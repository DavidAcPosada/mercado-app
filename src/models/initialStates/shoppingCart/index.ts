import { ShoppingCartElement } from 'interfaces';

const useShoppingCartInitialState = () => {
  const shoppingCartInitialState: ShoppingCartElement[] = [];

  return { shoppingCartInitialState };
};

export default useShoppingCartInitialState;
