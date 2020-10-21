import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import { MODULE_NAME as modalModuleName } from './modal/selectors';
import { reducer as modalReducer } from './modal/reducer';
import { MODULE_NAME as cartModuleName} from './cart/selectors';
import { reducer as cartReducer } from './cart/reducer';

import { MODULE_NAME as authModuleName } from './auth/selectors';
import { reducer as authReducer } from './auth/reducer';

import { MODULE_NAME as newCustomerModuleName } from './registration/slectors';
import { reducer as newCustomerReducer } from './registration/reducer';

const rootReducer = combineReducers({
  [modalModuleName]: modalReducer,
  [cartModuleName]: cartReducer,
  [authModuleName]: authReducer,
  [newCustomerModuleName]: newCustomerReducer
})
 
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
