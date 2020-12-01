import { server } from '../../API';
import { setAuthToken } from '../auth/operations';

import { setCustomer } from './actions';
import { getCart } from '../cart/operations'
import { getFavorites } from '../favorites/operations'
import { openModal } from '../modal/actions';

export const registerCustomer = async (customerData) => {
  const {prefix, phone } = customerData
  const customer = {...customerData, telephone: prefix + phone}
  try {
    const responce = await server.post('/customers', customer);
    return responce
  } catch (error) {
    throw new Error(error.response.data.message)
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
      dispatch(getCart());
      dispatch(getFavorites());
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const updateCustomer = (updatedCustomer) => async (dispatch, getState) => {
  const { auth } = getState();

  if (auth.token) {
    setAuthToken(auth.token);
  }
  try {
    const { status, data } = await server.put('/customers', updatedCustomer);

    if (status === 200) {
      dispatch(setCustomer(data));
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const changePass = (passwords) => async (dispatch, getState) => {
  const { auth } = getState();

  if (auth.token) {
    setAuthToken(auth.token);
  }
  try {
    const { status, data } = await server.put('/customers/password', passwords);

    if (status === 200) {
      dispatch(setCustomer(data));
      dispatch(openModal(data.message))
    }
  } catch (error) {
    console.log(error.response.data);
  }
};