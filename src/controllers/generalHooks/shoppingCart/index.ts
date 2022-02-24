import { useState, useEffect, useCallback } from 'react';

import { Product, ShoppingCartElement } from 'interfaces';
import useModels from 'models';
import useApi from 'api';

const useShoppingCartController = () => {
  const { useActions } = useApi();
  const { dispatch, useShoppingCartActions } = useActions();
  const { actAddProductShoppingCart, actUpdateProductShoppingCart } =
    useShoppingCartActions();

  const { useSelectors } = useModels();
  const { useSelector, useShoppingCartSelectors } = useSelectors();
  const { shoppingCartSelector } = useShoppingCartSelectors();
  const shoppingCart = useSelector(shoppingCartSelector);

  const [summary, setSummary] = useState(0);

  const handleCalculateSummary = useCallback((data: ShoppingCartElement[]) => {
    const result = data.reduce((prev, current) => {
      return (
        prev +
        current.quantity *
          (current.product.special_price ?? current.product.price)
      );
    }, 0);
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

  useEffect(() => {
    handleCalculateSummary(shoppingCart);
  }, [shoppingCart, handleCalculateSummary]);

  return { handleAddProduct, shoppingCart, summary };
};

export default useShoppingCartController;
