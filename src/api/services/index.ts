import { trackPromise } from 'react-promise-tracker';

import { ProductResponse } from 'interfaces';
import useApi from 'api';

const useServices = () => {
  const { useProviders } = useApi();
  const { useProductsProviders } = useProviders();
  const { getProductsProvider } = useProductsProviders();

  const getProductsService = (): Promise<ProductResponse> => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(trackPromise(getProductsProvider()));
      } catch (error) {
        reject(error);
      }
    });
  };

  return { getProductsService };
};

export default useServices;
