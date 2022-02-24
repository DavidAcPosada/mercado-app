import useModels from 'models';
import { useEffect, useState } from 'react';

const useProductController = (id: string | number) => {
  const { useSelectors } = useModels();
  const { useSelector, useShoppingCartSelectors } = useSelectors();
  const { shoppingCartSelector } = useShoppingCartSelectors();
  const shoppingCart = useSelector(shoppingCartSelector);

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const found = shoppingCart.find((value) => value.product.id === id);
    if (found) {
      setQuantity(found.quantity);
    } else {
      setQuantity(0);
    }
  }, [shoppingCart]);

  return {
    quantity,
  };
};

export default useProductController;
