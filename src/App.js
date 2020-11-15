import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import './styles/style.scss';
import { Navigation } from './pages/navigation';
import { getProducts } from './store/AppData/products_draft/middlware';
import { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { getCustomer } from './store/Сustomer/customer/middlwares';
import { dataLoaded, getAllData } from './store/AppData/getAllData';

function App() {
 
  useEffect(() => {
    if (!dataLoaded.LOADED) {
      getAllData();
    }
  }, [dataLoaded.LOADED]);
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Navigation />
    </PersistGate>
  );
}

export default App;
