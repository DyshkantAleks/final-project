import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import './styles/style.scss';
import { Navigation } from './pages/navigation';
import { getProducts } from './store/products_draft/middlware';
import { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { getCustomer } from './store/customer/middlwares';
import ErrorBoundary from './components/ErrorBoundary';

function App () {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(),
      dispatch(getCustomer()));
  }, [dispatch]);
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <ErrorBoundary>
          <Navigation/>
        </ErrorBoundary>
      </Router>
    </PersistGate>
  );
};

export default App;