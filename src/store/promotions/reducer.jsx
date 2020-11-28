import { SET_PROMOTIONS } from './action-types'

const InitialState = {
  promotions: []
}

export function reducer (state = InitialState, { type, payload }) {
  switch (type) {
    case SET_PROMOTIONS:
      return {
        ...state,
        promotions: payload
      }
    default:
      return state
  }
}
