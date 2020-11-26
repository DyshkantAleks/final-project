import { SET_PRODUCTS, SET_LOADER } from './types';

export const InitialState = {
  products: [],
  isDataLoaded: false
}

export function reducer (state = InitialState, { type, payload }) {
  switch (type) {
    case SET_LOADER:
      return {
        ...state,
        isDataLoaded: true
      }
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload,
        isDataLoaded: false
      }
    default:
      return state
  }
};