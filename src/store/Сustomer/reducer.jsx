import { LOGOUT_CUSTOMER, SET_CUSTOMER } from './customer/action-types';
import {
  DEL_LOGIN,
  DEL_TOKEN,
  SET_AUTH_ERROR,
  SET_LOGIN,
  SET_PASSWORD,
  SET_TOKEN,
} from './auth/action-types';
const initialState = {
  customer: {
    name: 'Пользователь',
    login: null,
    password: null,
    token: null,
    error: null,
  },
  isLogined: false,
};
export function reducer (state = initialState, { type, payload }) {
  switch (type) {
    case SET_CUSTOMER:
      return {
        ...state,
        customer: {...payload },
        isLogined: true,
      };
    case LOGOUT_CUSTOMER:
      return {
        ...state,
        customer: { name: 'Пользователь' },
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
    case DEL_LOGIN:
      return {
        ...state,
        login: null,
      };
    case DEL_TOKEN:
      return {
        ...state,
        token: null,
      };

    default:
      return state;
  }
}
