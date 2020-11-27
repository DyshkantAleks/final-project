import { ADD_TO_CART, QTY_DOWN, QTY_UP, REMOVE_FROM_CART, SET_CART, CLEAR_CART } from './types';

export const setCart = (payload) => ({
  type: SET_CART,
  payload
});

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload
})

export const removeFromCart = (payload) => ({
  type: REMOVE_FROM_CART,
  payload
})

export const quantityUp = (payload) => ({
  type: QTY_UP,
  payload
})

export const quantityDown = (payload) => ({
  type: QTY_DOWN,
  payload
})

export const clearCart = (payload) => ({
  type: CLEAR_CART,
  payload
})
