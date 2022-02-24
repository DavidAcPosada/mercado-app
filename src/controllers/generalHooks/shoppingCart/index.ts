import { useState, useEffect, useCallback } from 'react';

import { Product, ShoppingCartElement } from 'interfaces';
import useModels from 'models';
import useApi from 'api';

const useShoppingCartController = () => {
  const { useActions } = useApi();
  const { dispatch, useShoppingCartActions } = useActions();
  const {
    actAddProductShoppingCart,
    actUpdateProductShoppingCart,
    actRemoveShoppingCart,
  } = useShoppingCartActions();

  const { useSelectors } = useModels();
  const { useSelector, useShoppingCartSelectors } = useSelectors();
  const { shoppingCartSelector } = useShoppingCartSelectors();
  const shoppingCart = useSelector(shoppingCartSelector);

  const [summary, setSummary] = useState(0);
  const [counting, setCounting] = useState(0);

  const handleCalculateSummary = useCallback((data: ShoppingCartElement[]) => {
    const result = data.reduce((prev, current) => {
      return (
        prev +
        current.quantity *
          (current.product.special_price ?? current.product.price)
      );
    }, 0);
    setCounting(data.reduce((prev, current) => prev + current.quantity, 0));
    setSummary(() => result);
  }, []);

  const handleAddProduct = (product: Product) => () => {
    const found = shoppingCart.find((value) => value.product.id === product.id);
    if (found) {
      const index = shoppingCart.indexOf(found);
      const newState = shoppingCart;
      newState[index].quantity += 1;
      handleCalculateSummary(newState);
      dispatch(actUpdateProductShoppingCart([...newState]));
    } else {
      dispatch(actAddProductShoppingCart(product));
      handleCalculateSummary([...shoppingCart, { quantity: 1, product }]);
    }
  };

  const handleRemoveProduct = (product: Product) => () => {
    const found = shoppingCart.find((value) => value.product.id === product.id);
    if (found) {
      const index = shoppingCart.indexOf(found);
      const newState = shoppingCart;
      newState[index].quantity -= 1;
      if (newState[index].quantity === 0) {
        const stateFiltered = shoppingCart.filter(
          (value) => value.product.id !== product.id
        );
        dispatch(actUpdateProductShoppingCart([...stateFiltered]));
        handleCalculateSummary(stateFiltered);
      } else {
        dispatch(actUpdateProductShoppingCart([...newState]));
        handleCalculateSummary(newState);
      }
    }
  };

  const handleDeleteShoppingCart = () => {
    dispatch(actRemoveShoppingCart());
  };

  useEffect(() => {
    handleCalculateSummary(shoppingCart);
    const intervalId = setInterval(() => {
      setSummary((prev) => (prev += 0.000001));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [shoppingCart, handleCalculateSummary]);

  return {
    handleAddProduct,
    shoppingCart,
    summary,
    handleRemoveProduct,
    counting,
    handleDeleteShoppingCart,
  };
};

export default useShoppingCartController;
