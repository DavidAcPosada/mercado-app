import { Product } from 'interfaces/products';

const useProductsInitialState = () => {
  const productsInitialState: Product[] = [];

  return { productsInitialState };
};

export default useProductsInitialState;
