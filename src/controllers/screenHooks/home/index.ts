import { useEffect } from 'react';

import useModels from 'models';
import useApi from 'api';

const useHome = () => {
  const { useActions } = useApi();
  const { dispatch, useProductActions } = useActions();
  const { actGetProducts } = useProductActions();

  const { useSelectors } = useModels();
  const { useSelector, useProductsSelectors } = useSelectors();
  const { productsSelector } = useProductsSelectors();
  const products = useSelector(productsSelector);

  useEffect(() => {
    dispatch(actGetProducts());
  }, []);

  return { products };
};

export default useHome;
