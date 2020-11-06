import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import './styles/style.scss';
import { Navigation } from './pages/navigation';
import { getProducts } from './store/products_draft/middlware';
import { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { getCustomer } from './store/customer/middlwares';

function App () {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(),
      dispatch(getCustomer()));
  }, [dispatch]);

  return (
    <PersistGate loading={null} persistor={persistor}>
      <Navigation />
    </PersistGate>
  );
};

export default App;