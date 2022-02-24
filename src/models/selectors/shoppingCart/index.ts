import useHelpers from 'helpers';
import { GlobalState } from 'interfaces';

const useShoppingCartSelectors = () => {
  const { useCreateSelector } = useHelpers();
  const { createSelector } = useCreateSelector();

  const shoppingCartSelector = createSelector(
    (state: GlobalState) => state.shoppingCart,
    (shoppingCart) => shoppingCart
  );

  return { shoppingCartSelector };
};

export default useShoppingCartSelectors;
