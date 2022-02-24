import { lazy } from 'react';

export const Badge = lazy(() => import('./Badge'));
export const Button = lazy(() => import('./Button'));
export const Card = lazy(() => import('./Card'));
export const Chip = lazy(() => import('./Chip'));
export const Price = lazy(() => import('./Price'));
export const ProductCard = lazy(() => import('./ProductCard'));
export const IconButton = lazy(() => import('./IconButton'));
export const Typography = lazy(() => import('./Typography'));

const useComponents = () => {
  return {
    Badge,
    Button,
    Card,
    Chip,
    Price,
    ProductCard,
    IconButton,
    Typography,
  };
};

export default useComponents;
