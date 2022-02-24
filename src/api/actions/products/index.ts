import { Dispatch } from 'redux';
import _ from 'lodash';

import { Action, Product } from 'interfaces';

import useModels from 'models';
import useApi from 'api';

const useProductActions = () => {
  const { useTypes } = useModels();
  const { useProductTypes } = useTypes();
  const { GET_PRODUCTS } = useProductTypes();

  const { useServices } = useApi();
  const { getProductsService } = useServices();

  const actGetProducts =
    () => async (dispatch: Dispatch<Action<Product[]>>) => {
      try {
        const response = await getProductsService();
        const formattedData = _.map(
          response.data.filter((value) => value.attributes.price > 0),
          (value) => {
            return {
              id: value.id,
              ...value.attributes,
            };
          }
        );
        dispatch({
          type: GET_PRODUCTS,
          payload: formattedData,
        });
      } catch (error) {
        console.error(error);
      }
    };

  return { actGetProducts };
};

export default useProductActions;
