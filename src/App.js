import React from 'react';
import './styles/style.scss';
import {Content} from "./components/Content/Content";
import {Navigation} from "./pages/navigation";
import {Header} from "./commons/Header/Header";


function App() {
    return (
        <div className="App">
            <Navigation/>
        </div>
    );

}

export default App;
