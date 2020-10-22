import { SET_LOGIN, SET_PASSWORD } from './action-types';

export const setLogin = payload => ({
  type: SET_LOGIN,
  payload
})

export const setPassword = payload => ({
  type: SET_PASSWORD,
  payload
})