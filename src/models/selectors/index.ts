import { useSelector } from 'react-redux';

import useProductsSelectors from './products';

const useSelectors = () => {
  return {
    useSelector,
    useProductsSelectors,
  };
};

export default useSelectors;
