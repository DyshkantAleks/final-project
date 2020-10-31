import { ADD_TO_CART, QTY_DOWN, QTY_UP, REMOVE_FROM_CART } from './action-types';

const InitialState = {
  cart: []
};

export function reducer (state = InitialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload]
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.product._id !== payload)
      }

    case QTY_UP:
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.product._id === payload) {
            item.cartQuantity += 1;
          }
          return item;
        })
      }

    case QTY_DOWN:
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.product._id === payload) {
            item.cartQuantity -= 1;
          }
          return item;
        })
      }

    default:
      return state
  }
};
