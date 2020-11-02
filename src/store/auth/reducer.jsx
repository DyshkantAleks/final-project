import { SET_LOGIN, SET_PASSWORD } from './action-types'

const initialState = {
  login: '',
  password: ''
}
export function reducer (state = initialState, { type, payload }) {
  switch (type) {
    case SET_LOGIN:
      return (
        {
          ...state,
          login: payload
        }
      )
    case SET_PASSWORD:
      return (
        {
          ...state,
          password: payload
        }
      )
    default:
      return state
  }
}
