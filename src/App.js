import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';

import { ProductCarousel } from './components/ProductCarousel/ProductCarousel';
import { ProductItem } from './components/ProductItem/ProductItem';

import { Navigation } from './pages/navigation';
import { getProducts } from './store/products_draft/middlware';

import './styles/style.scss';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    return () => {};
  }, []);
  // const modalIsOpen = useSelector(selectModalIsOpen);
  // const modalContent = useSelector(selectModalContent);

  return (
    <div className='App'>
      <Navigation />
    </div>
  );
}

export default App;
