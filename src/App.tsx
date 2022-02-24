import { PersistGate } from 'redux-persist/es/integration/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import useConfig from 'config';
import useViews from 'views';
import { Suspense } from 'react';

function App() {
  const { useStoreConfig, useInterceptor } = useConfig();
  const { store, persistor } = useStoreConfig();
  useInterceptor();

  const { useScreens, useLayouts } = useViews();
  const { Home } = useScreens();
  const { ToolbarLayout } = useLayouts();

  return (
    <Suspense fallback={'Loading'}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <ToolbarLayout>
            <Router>
              <Routes>
                <Route path='/' element={<Home />} />
              </Routes>
            </Router>
          </ToolbarLayout>
        </PersistGate>
      </Provider>
    </Suspense>
  );
}

export default App;
