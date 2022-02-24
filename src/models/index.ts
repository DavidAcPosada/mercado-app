import useInitialStates from './initialStates';
import useSelectors from './selectors';
import useReducers from './reducers';
import useTypes from './types';

const useModels = () => {
  return {
    useReducers,
    useInitialStates,
    useSelectors,
    useTypes,
  };
};

export default useModels;
