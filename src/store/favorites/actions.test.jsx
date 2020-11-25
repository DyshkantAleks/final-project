import { setFavorites, addToFavorites, removeFromFavorites } from './actions';
import * as actions from './action-types';

// REMOVE_FROM_FAVORITES,
describe('Set favorite actions', () => {
  it('setFavorites(): should set favorites', () => {
    const expectedActions = {
      type: actions.SET_FAVORITES,
      payload: [1, 2, 3]
    };
    expect(setFavorites(expectedActions.payload)).toEqual(expectedActions)
  });
});

describe('Add Favorite action', () => {
  it('addToFavorites(): should add items to favorites', () => {
    const expectedActions = {
      type: actions.ADD_TO_FAVORITES,
      payload: [1, 2, 3]
    }
    expect(addToFavorites(expectedActions.payload)).toEqual(expectedActions)
  });
})

describe('Remove from Favorite action', () => {
  it('removeFromFavorites(): should remove items from favorites', () => {
    const expectedActions = {
      type: actions.REMOVE_FROM_FAVORITES,
      payload: []
    }
    expect(removeFromFavorites(expectedActions.payload)).toEqual(expectedActions)
  });
})