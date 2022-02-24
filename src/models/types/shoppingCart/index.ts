const useShoppingCartTypes = () => {
  const UPDATE_SHOPPING_CART = 'SHOPPING_CART::UPDATE_SHOPPING_CART';
  const ADD_PRODUCT = 'SHOPPING_CART::ADD_PRODUCT';

  return { UPDATE_SHOPPING_CART, ADD_PRODUCT };
};

export default useShoppingCartTypes;
