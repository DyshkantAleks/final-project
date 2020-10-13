import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import { MODULE_NAME as modalModuleName } from './modal/selectors';
import { reducer as modalReducer } from './modal/reducer';
import { MODULE_NAME as cartModuleName} from './cart/selectors';
import { reducer as cartReducer } from './cart/reducer';

const rootReducer = combineReducers({
  [modalModuleName]: modalReducer,
  [cartModuleName]: cartReducer
})
 
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))