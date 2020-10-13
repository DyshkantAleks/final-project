import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import './styles/style.scss';
import { Button } from './components/Button';
import { Modal } from './components/Modal';
import { ModalThanks } from './components/Modal/ModalThanks';
import { closeModal, openModal } from './store/modal/actions';
import { selectModalContent, selectModalIsOpen } from './store/modal/selectors';

function App() {
    const dispatch = useDispatch();
    const modalIsOpen = useSelector(selectModalIsOpen);
    const modalContent = useSelector(selectModalContent);

    return (
        <div className="App">
          {modalIsOpen && <Modal {...modalContent} closeModalHandler={() => dispatch(closeModal())}/>}

          <Button text="БЕЛАЯ КНОПКА" color='white' onClick={() => dispatch(openModal(ModalThanks))}/>
        </div>
    );
}

export default App;