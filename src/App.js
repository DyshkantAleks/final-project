import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { LoginForm } from './components/forms/loginForm/LoginForm';
import { RegisterForm } from './components/forms/registerForm/RegisterForm';
import { ProductCarousel } from './components/ProductCarousel/ProductCarousel';
import { ProductItem } from './components/ProductItem/ProductItem';

import { Navigation } from './pages/navigation';
import { getProducts } from './store/products_draft/middlware';

import './styles/style.scss';


function App() {
   const dispatch = useDispatch();
   useEffect(() => {
     dispatch(getProducts())
     return () => {
      
     }
   }, [])
  // const modalIsOpen = useSelector(selectModalIsOpen);
  // const modalContent = useSelector(selectModalContent);
  const handleSubmit = (values) => {
    console.log(values)
  }
  
  return (
    <div className='App'>
      <Navigation/>
      <LoginForm/>
      <RegisterForm handleSubmit={() => handleSubmit()}/>
    </div>)
}

export default App;