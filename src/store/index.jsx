import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import { MODULE_NAME as modalModuleName } from './modal/selectors';
import { reducer as modalReducer } from './modal/reducer';

const rootReducer = combineReducers({
  [modalModuleName]: modalReducer,
})
 
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))