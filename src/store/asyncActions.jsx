import { getCustomer } from './customer/operations';
import { getProducts } from './products/operations';

export const getAppData = () => dispatch => {
  return Promise.all([dispatch(getProducts()), dispatch(getCustomer())])
}
  
;