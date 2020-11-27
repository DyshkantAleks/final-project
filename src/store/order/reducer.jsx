import {SET_ORDER} from './types';

const InitialState = {};

export function reducer (state = InitialState, { type, payload }) {
  switch (type) {
    case SET_ORDER:
      return {
        ...state,
        order: payload
      };
    default:
      return state
  }
};