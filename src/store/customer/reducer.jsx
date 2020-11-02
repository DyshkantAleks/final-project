import { SET_CUSTOMER } from './action-types';

const initialState = {
  firstName: 'Пользователь',
  lastName: '',
  login: '',
  email: '',
  password: '',
  telephone: '',
  gender: '',
  avatarUrl: ''
};
export function reducer (state = initialState, { type, payload }) {
  switch (type) {
    case SET_CUSTOMER:
      return {
        ...state,
        ...payload,
      };
    default:
      return state
  }
}
