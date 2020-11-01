import { ADD_TO_CART, QTY_DOWN, QTY_UP, REMOVE_FROM_CART } from './action-types'

const InitialState = {
  cart: [
    {
      code: '9001603-08',
      quantity: 2
    },
    {
      code: '9029004A-812',
      quantity: 3
    },
    {
      code: '9051003-202',
      quantity: 10
    }
  ],
  isDataLoad: false
}

export function reducer (state = InitialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload]
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(({ id }) => id !== payload)
      }

    case QTY_UP:
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.code === payload) {
            item.quantity += 1
          }
          return item
        })
      }

    case QTY_DOWN:
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.code === payload) {
            item.quantity -= 1
          }
          return item
        })
      }

    default:
      return state
  }
};
