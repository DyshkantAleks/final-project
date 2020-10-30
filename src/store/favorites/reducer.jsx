import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './action-types';

const InitialState = {
  favorites: [ '9001603-08', '9029004A-812', '9051003-202']
};

export function reducer (state = InitialState, { type, payload }) {
  switch (type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, payload]
      };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(({ id }) => id !== payload)
      }

    default:
      return state
  }
};
