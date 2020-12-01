import { server } from '../../API';
import { setAuthToken } from '../auth/middlware';

import { setCustomer } from './action-creators';

export const registerCustomer = (customer) => async (dispatch) => {
  try {
    const { status, data } = await server.post('/customers', customer);

    if (status === 200) {
      dispatch(setCustomer(data));
    }
  } catch (error) {
    console.log(error.response.data);
  }
};
export const getCustomer = () => async (dispatch, getState) => {
  const { auth } = getState();

  if (auth.token) {
    setAuthToken(auth.token);
  }
  try {
    const { status, data } = await server.get('/customers/customer');

    if (status === 200) {
      dispatch(setCustomer(data));
    }
  } catch (error) {
    console.log(error.response.data);
  }
};
