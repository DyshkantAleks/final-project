import { reducer, InitialState } from './reducer';
import * as actions from './types';

describe('Favorite reducer', () => {
  it('SET_FAVORITES', () => {
    const action = {
      type: actions.SET_FAVORITES,
      payload: [1, 2, 3]
    }
    expect(reducer(InitialState, action)).toEqual({
      ...InitialState,
      favorites: action.payload
    });
  });

  it('ADD_TO_FAVORITES', () => {
    const InitialState = {
      favorites: []
    };
    const itemToFav = 123;
    const action = {
      type: actions.ADD_TO_FAVORITES,
      payload: itemToFav
    }
    expect(reducer(InitialState, action)).toEqual({
      ...InitialState,
      favorites: [...InitialState.favorites, action.payload],
    });
  });
})