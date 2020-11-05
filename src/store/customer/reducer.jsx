import { SET_CUSTOMER } from './action-types';

const initialState = {
  customer: {
    name: 'Пользователь'
  },
  isLogined: false
 
};
export function reducer (state = initialState, { type, payload }) {
  switch (type) {
    case SET_CUSTOMER:
      return {
        ...state,
        customer: {...state.customer, ...payload},
        isLogined: true
      };
    default:
      return state
  }
}
