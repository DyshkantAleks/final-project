import {SET_ORDER} from './action-types';

const InitialState = {orders: []};

export function reducer (state = InitialState, { type, payload }) {
  switch (type) {
    case SET_ORDER:
      return {
        ...state,
        orders: payload
      };
    default:
      return state
  }
};