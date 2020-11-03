import { SET_AUTH_ERROR, SET_LOGIN, SET_PASSWORD, SET_TOKEN } from './action-types';

const initialState = {
  login: 'User',
  password: null,
  token: null,
  error: null
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
    case SET_TOKEN:
      return (
        {
          ...state,
          token: payload,
        }
      )
    case SET_AUTH_ERROR:
      return (
        {
          ...state,
          error: payload,
        }
      )

    default:
      return state
  }
}
