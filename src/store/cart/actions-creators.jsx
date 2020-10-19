import { ADD_TO_CART, QTY_DOWN, QTY_UP, REMOVE_FROM_CART } from "./action-types";

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload
});

export const removeFromCart = (payload) => ({
  type: REMOVE_FROM_CART,
  payload
});

export const quantityUp = (payload) => ({
  type: QTY_UP,
  payload
});

export const quantityDown = (payload) => ({
  type: QTY_DOWN,
  payload
});

export const increaseQty = () => dispatch => {
  
}
