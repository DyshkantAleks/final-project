import { SET_PRODUCTS, SET_LOADER } from './actions'

const InitialState = {
  products: [],
  isDataLoaded: false
}
// console.log(InitialState)

export function reducer (state = InitialState, { type, payload }) {
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload,
        isDataLoaded: true
      }
    default:
      return state
  }
}
