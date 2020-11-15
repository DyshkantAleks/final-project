import { SET_CATEGORIES } from './actions'

const InitialState = {
  categories: [],
  categoriesLoaded: false,
}

export function reducer (state = InitialState, { type, payload }) {
  switch (type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
        categoriesLoaded: true
      }
    default:
      return state
  }
}
