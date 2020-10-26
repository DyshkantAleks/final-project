import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import { MODULE_NAME as modalModuleName } from './modal/selectors';
import { reducer as modalReducer } from './modal/reducer';
import { MODULE_NAME as cartModuleName} from './cart/selectors';
import { reducer as cartReducer } from './cart/reducer';
import { MODULE_NAME as promotionsModuleName} from './promotions/selectors';
import { reducer as promotionsReducer } from './promotions/reducer';
import { MODULE_NAME as productsModuleName} from './products_draft/selectors';
import { reducer as productReducer} from './products_draft/reducer'

import { MODULE_NAME as authModuleName } from './auth/selectors';
import { reducer as authReducer } from './auth/reducer';

import { MODULE_NAME as newCustomerModuleName } from './registration/slectors';
import { reducer as newCustomerReducer } from './registration/reducer';

import {MODULE_NAME as categoriesModuleName} from "./categories/selectors";
import { reducer as categoriesReducer } from "./categories/reducer";

const rootReducer = combineReducers({
  [modalModuleName]: modalReducer,
  [cartModuleName]: cartReducer,
  [authModuleName]: authReducer,
  [newCustomerModuleName]: newCustomerReducer,
  [productsModuleName]: productReducer,
  [productsModuleName]: productReducer,
[promotionsModuleName]: promotionsReducer,
  [categoriesModuleName]: categoriesReducer
});


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));