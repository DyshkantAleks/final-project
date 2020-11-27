import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import './styles/style.scss';
import { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { Navigation } from './pages/navigation';
import { getAppData } from './store/asyncActions';

import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const dispatch = useDispatch();
  const [dataLoad, setDataLoad] = useState(false);
  useEffect(() => {
    dispatch(getAppData()).then(() => setDataLoad(true))
  }, [dispatch]);

  return (
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <ErrorBoundary>
          {dataLoad && <Navigation/>}
        </ErrorBoundary>
      </Router>
    </PersistGate>
  );
}

export default App;
