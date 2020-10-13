import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';

import { reducer as productsReducer, MODULE_NAME as productsModuleName } from './products';
import { reducer as cartReducer, MODULE_NAME as cartModuleName } from './cart';


const rootReducer = combineReducers({
    [productsModuleName]: productsReducer,
    [cartModuleName]: cartReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;




