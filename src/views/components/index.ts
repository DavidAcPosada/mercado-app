import { lazy } from 'react';

export const ProductCard = lazy(() => import('./ProductCard'));
export const IconButton = lazy(() => import('./IconButton'));
export const Typography = lazy(() => import('./Typography'));

const useComponents = () => {
  return {
    ProductCard,
    IconButton,
    Typography,
  };
};

export default useComponents;
