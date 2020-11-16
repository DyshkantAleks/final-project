import {SET_ORDER} from './action-types';

const InitialState = {};

export function reducer (state = InitialState, { type, payload }) {
  switch (type) {
    case SET_ORDER:
      return {
        ...state,
        order:{ ...state.order, ...payload}
      };
    default:
      return state
  }
};