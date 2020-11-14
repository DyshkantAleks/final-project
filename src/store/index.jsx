import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { MODULE_NAME as modalModuleName } from './modal/selectors'
import { reducer as modalReducer } from './modal/reducer'
import { MODULE_NAME as cartModuleName } from './AppData/cart/selectors'
import { reducer as cartReducer } from './AppData/cart/reducer'
import { MODULE_NAME as promotionsModuleName } from './AppData/promotions/selectors'
import { reducer as promotionsReducer } from './AppData/promotions/reducer'
import { MODULE_NAME as productsModuleName } from './AppData/products_draft/selectors'
import { reducer as productReducer } from './AppData/products_draft/reducer'
import { MODULE_NAME as favoritesModuleNAme } from './AppData/favorites/selectors'
import { reducer as favoritesReducer } from './AppData/favorites/reducer'

import { MODULE_NAME as customerModuleName } from './Сustomer/selectors'
import { reducer as customerReducer } from './Сustomer/reducer'
import { MODULE_NAME as categoriesModuleName } from './AppData/categories/selectors';
import { reducer as categoriesReducer } from './AppData/categories/reducer';

const persistCart = {
  key: 'cart',
  storage,
}
const persistConfigAuth = {
  key: 'auth',
  storage,
}

const persistFavorite = {
  key: 'favorite',
  storage,
}

const rootReducer = combineReducers({
  [modalModuleName]: modalReducer,
  [cartModuleName]: persistReducer(persistCart, cartReducer),
  [productsModuleName]: productReducer,
  [promotionsModuleName]: promotionsReducer,
  [categoriesModuleName]: categoriesReducer,
  [favoritesModuleNAme]: persistReducer(persistFavorite, favoritesReducer),
  [customerModuleName]: persistReducer(persistConfigAuth, customerReducer)
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);
