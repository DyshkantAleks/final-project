import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { LoginForm } from './components/forms/loginForm/LoginForm';
import { RegisterForm } from './components/forms/registerForm/RegisterForm';
import { ProductCarousel } from './components/ProductCarousel/ProductCarousel';
import { ProductItem } from './components/ProductItem/ProductItem';

import { Navigation } from './pages/navigation';

import './styles/style.scss';

function App() {
  // const dispatch = useDispatch();
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
    </div>
  );
}

export default App;