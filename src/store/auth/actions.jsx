import { DEL_LOGIN, DEL_TOKEN, SET_AUTH_ERROR, SET_LOGIN, SET_TOKEN } from './types';

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
export const delLogin = () => ({
  type: DEL_LOGIN
  
})
export const delToken = () => ({
  type: DEL_TOKEN
  
})