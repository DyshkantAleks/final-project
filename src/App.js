import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import './styles/style.scss';
import { Navigation } from './pages/navigation';
import { getProducts } from './store/products/middlware';
import { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { getCustomer } from './store/customer/middlwares';
import ErrorBoundary from './components/ErrorBoundary';

function App () {
  const dispatch = useDispatch();
  const [dataLoad, seDataLoad] = useState(false);
  useEffect(() => {
    Promise.all([dispatch(getProducts()), dispatch(getCustomer())]).then(() => seDataLoad(true))
  }, [dispatch]);

  return (
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <ErrorBoundary>
          {dataLoad && <Navigation/>}
        </ErrorBoundary>
      </Router>
    </PersistGate>
  );
}

export default App;
