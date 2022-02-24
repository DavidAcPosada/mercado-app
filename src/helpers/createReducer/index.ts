import { Action } from 'interfaces/redux';

const useCreateReducer = () => {
  const createReducer =
    (initialState: any, handler: any) =>
    (state = initialState, action: Action<any>) =>
      handler?.hasOwnProperty(action.type)
        ? handler[action.type](state, action)
        : state;
  return {
    createReducer,
  };
};

export default useCreateReducer;
