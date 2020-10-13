import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import './styles/style.scss';


import {Navigation} from "./pages/navigation";

function App() {
    // const dispatch = useDispatch();
    // const modalIsOpen = useSelector(selectModalIsOpen);
    // const modalContent = useSelector(selectModalContent);

    return (
        <div className="App">
            <Navigation/>
        </div>
    );
}

export default App;
