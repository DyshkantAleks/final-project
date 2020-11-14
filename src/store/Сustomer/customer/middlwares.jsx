import { server } from '../../../API';
import { setAuthToken } from '../../Сustomer/auth/middlware';
import { setCustomer } from './action-creators';
import { getCart } from '../../AppData/cart/middlware'
import { getFavorites } from '../../AppData/favorites/middlware'
import { openModal } from '../../modal/actions-creators';

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