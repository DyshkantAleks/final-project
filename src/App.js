import React, {useEffect} from 'react';
import './App.css';
import './styles/style.scss';
import { Navigation } from './pages/navigation';
import {useDispatch} from "react-redux";
import {getProducts} from "./store/products_draft/middlware";


function App () {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
    <Navigation />
    </>
  );
}

export default App;