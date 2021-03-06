import { createStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import useModels from 'models';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const useStoreConfig = () => {
  // Models
  const { useReducers } = useModels();
  const reducers = useReducers();

  const initialState = {};
  let middlewaresToApply = [thunk];

  const persistConfig = {
    key: 'root',
    storage: storage,
  };

  const persistReduce = persistReducer(persistConfig, reducers);

  if (process.env.ENVIRONMENT === 'dev') {
    const reduxInmmutableStateInvariant =
      require('redux-immutable-state-invariant').default();
    middlewaresToApply = [...middlewaresToApply, reduxInmmutableStateInvariant];
  }

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  let store = createStore(
    persistReduce,
    initialState,
    composeEnhancers(applyMiddleware(...middlewaresToApply))
  );

  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};

export default useStoreConfig;
