import React from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import './App.css';
import './styles/style.scss';
// import { Button } from './components/Button';
// import { Modal } from './components/Modal';
// import { ModalThanks } from './components/Modal/ModalThanks';
// import { closeModal, openModal } from './store/modal/actions';
// import { selectModalContent, selectModalIsOpen } from './store/modal/selectors';
import { Navigation } from './pages/navigation';

function App () {
  return (

    <Navigation />

  );
}

export default App;