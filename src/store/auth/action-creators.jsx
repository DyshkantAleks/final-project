import { SET_AUTH_ERROR, SET_LOGIN, SET_TOKEN } from './action-types';

export const setLogin = payload => ({
  type: SET_LOGIN,
  payload
})

export const setToken = payload => ({
  type: SET_TOKEN,
  payload
})
export const setAuthError = payload => ({
  type: SET_AUTH_ERROR,
  payload
})
