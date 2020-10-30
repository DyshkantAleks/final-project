import React, {useEffect} from 'react';
//import {Provider, useDispatch, useSelector} from 'react-redux';
import './App.css';
import './styles/style.scss';
// import { Button } from './components/Button';
// import { Modal } from './components/Modal';
// import { ModalThanks } from './components/Modal/ModalThanks';
// import { closeModal, openModal } from './store/modal/actions';
// import { selectModalContent, selectModalIsOpen } from './store/modal/selectors';
import { Navigation } from './pages/navigation';
import {ProductPage} from "./pages/Product";
import {useDispatch, useSelector} from "react-redux";
import {selectMainCategory} from "./store/categories/selectors";
import {getCategories} from "./store/categories/middlware";
import {getProducts} from "./store/products_draft/middlware";
import {selectProducts} from "./store/products_draft/selectors";

function App () {
  const dispatch = useDispatch();
  //const allProducts = useSelector(selectProducts);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  // console.log(allProducts);
  return (
    <>
    <Navigation />
    {/*<ProductPage/>*/}
    </>
  );
}

export default App;