import useHelpers from 'helpers';
import { GlobalState } from 'interfaces';

const useProductsSelectors = () => {
  const { useCreateSelector } = useHelpers();
  const { createSelector } = useCreateSelector();

  const productsSelector = createSelector(
    (state: GlobalState) => state.products,
    (products) => products
  );

  return { productsSelector };
};

export default useProductsSelectors;
