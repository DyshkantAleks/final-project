import { getCustomer } from './customer/middlwares';
import { getProducts } from './products/middlware';

export const getAppData = () => dispatch => {
  return Promise.all([dispatch(getProducts()), dispatch(getCustomer())])
}
  
;