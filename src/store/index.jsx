import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { MODULE_NAME as modalModuleName } from './modal/selectors'
import { reducer as modalReducer } from './modal/reducer'
import { MODULE_NAME as cartModuleName } from './cart/selectors'
import { reducer as cartReducer } from './cart/reducer'
import { MODULE_NAME as promotionsModuleName } from './promotions/selectors'
import { reducer as promotionsReducer } from './promotions/reducer'
import { MODULE_NAME as productsModuleName } from './products_draft/selectors'
import { reducer as productReducer } from './products_draft/reducer'
import { MODULE_NAME as favoritesModuleNAme } from './favorites/selectors'
import { reducer as favoritesReducer } from './favorites/reducer'

import { MODULE_NAME as authModuleName } from './auth/selectors'
import { reducer as authReducer } from './auth/reducer'

import { MODULE_NAME as customerModuleName } from './customer/slectors'
import { reducer as customerReducer } from './customer/reducer'

import { MODULE_NAME as categoriesModuleName } from './categories/selectors'
import { reducer as categoriesReducer } from './categories/reducer'

const rootReducer = combineReducers({
  [modalModuleName]: modalReducer,
  [cartModuleName]: cartReducer,
  [authModuleName]: authReducer,
  [productsModuleName]: productReducer,
  [promotionsModuleName]: promotionsReducer,
  [categoriesModuleName]: categoriesReducer,
  [favoritesModuleNAme]: favoritesReducer,
  [customerModuleName]: customerReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
