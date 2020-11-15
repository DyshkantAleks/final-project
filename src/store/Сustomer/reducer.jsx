import { LOGOUT_CUSTOMER, SET_CUSTOMER } from './customer/action-types';
import {
  SET_AUTH_ERROR,
  SET_LOGIN,
  SET_PASSWORD,
  SET_TOKEN,
} from './auth/action-types';
const initialState = {
  customer:{
    name: 'Пользователь',
  },
  token: null,
  error: null,

  isLogined: false,
};
export function reducer (state = initialState, { type, payload }) {
  switch (type) {
    case SET_CUSTOMER:
      return {
        ...state,
        customer: {...payload},
        isLogined: true,
      };
    case LOGOUT_CUSTOMER:
      return {
        ...state,
        customer: { name: 'Пользователь'},
        token: null,
        isLogined: false,
      };
    case SET_LOGIN:
      return {
        ...state,
        login: payload,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: payload,
      };
    case SET_AUTH_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
