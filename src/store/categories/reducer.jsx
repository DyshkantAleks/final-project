import { SET_CATEGORIES } from './actions'

export const InitialState = {
  categories: []
}

export function reducer (state = InitialState, { type, payload }) {
  switch (type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: payload
      }
    default:
      return state
  }
}
