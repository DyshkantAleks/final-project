import { ADD_TO_CART, DEL_FROM_CART } from './action-types';

export const openModal = (payload) => ({
  type: ADD_TO_CART,
  payload
});

export const closeModal = (payload) => ({
  type: DEL_FROM_CART,
  payload
});
