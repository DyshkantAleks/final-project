import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import './styles/style.scss';

import { Navigation } from './pages/navigation';
import { getProducts } from './store/products/middlware';
import { getCustomer } from './store/customer/middlwares';
import { Header } from './commons/Header/Header';
import { Footer } from './commons/Footer';
import { ScrollToTop } from './components/ScrollToTop';

function App () {
  const dispatch = useDispatch();
  const [dataLoad, setDataLoad] = useState(false);
  useEffect(() => {
    Promise.all([dispatch(getProducts()), dispatch(getCustomer())]).then(() => setDataLoad(true))
  }, [dispatch]);

  return (
    <>
      <Header/>
      <ScrollToTop/>
      {dataLoad && <Navigation/>}
      <Footer/>
    </>
  );
}

export default App;
