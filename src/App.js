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

import './styles/style.scss';
import {store} from "./store";


function App() {
    // const dispatch = useDispatch();
    // const modalIsOpen = useSelector(selectModalIsOpen);
    // const modalContent = useSelector(selectModalContent);

    return (
       <Provider store={store}>
            <Navigation />
       </Provider>
    );
}

export default App;