import { SET_PROMOTIONS } from './actions'

const InitialState = {
  promotions: [],
  promotionsLoaded: false
}

export function reducer (state = InitialState, { type, payload }) {
  switch (type) {
    case SET_PROMOTIONS:
      return {
        ...state,
        promotions: payload,
        promotionsLoaded: true
      }
    default:
      return state
  }
}
