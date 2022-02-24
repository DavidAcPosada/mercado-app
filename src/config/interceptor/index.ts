import { useEffect } from 'react';
import axios from 'axios';

const useInterceptor = () => {
  const handleRequestSuccess = (request: any) => {
    request.headers['Content-Type'] = 'application/json';
    request.headers['accept'] = 'application/json';
    return request;
  };
  const handleRequestError = (error: string | Error) => {
    console.log(`REQUEST ERROR! => ${error}`);
  };

  const handleResponseSuccess = (response: any) => {
    return response.data;
  };

  const handleResponseError = (error: string | Error) => {
    console.log(`RESPONSE ERROR! => ${error}`);
  };

  useEffect(() => {
    axios.defaults.baseURL = process.env.REACT_APP_API_URL;
    axios.defaults.params = {};
    axios.interceptors.request.use(handleRequestSuccess, handleRequestError);
    axios.interceptors.response.use(handleResponseSuccess, handleResponseError);
  }, []);
};

export default useInterceptor;
