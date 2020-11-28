import { reducer, InitialState } from './reducer';
import * as actions from './actions';

describe('Categories reducer', () => {
  it('SET_CATEGORIES', () => {
    const action = {
      type: actions.SET_CATEGORIES,
      payload: [1, 2, 3]
    };
    expect(reducer(InitialState, action)).toEqual({
      ...InitialState,
      categories: action.payload
    });
  });
});