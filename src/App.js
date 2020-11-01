import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";

import './App.css';
import './styles/style.scss';
import { Navigation } from './pages/navigation';
import { getProducts } from "./store/products_draft/middlware";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Navigation />
    </>
  );
}

export default App;