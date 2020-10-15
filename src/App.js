import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import './styles/style.scss';

import {Navigation} from "./pages/navigation";

function App () {
  
  return (
    <div className="App">
      <Navigation/>
    </div>
  );
}

export default App;
