import axios from 'axios';

const useProductsProviders = () => {
  const getProductsProvider = () => {
    return axios({
      method: 'GET',
      url: '/729fdd53-f365-49b4-bd55-f7e10bcc9a4b',
    });
  };

  return {
    getProductsProvider,
  };
};

export default useProductsProviders;
