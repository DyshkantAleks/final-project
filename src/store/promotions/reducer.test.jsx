import { reducer, InitialState } from './reducer';
import * as actions from './types';

describe('Promotions reducer', () => {
  it('SET_PROMOTIONS', () => {
    const action = {
      type: actions.SET_PROMOTIONS,
      payload: [1, 2, 3]
    }
    expect(reducer(InitialState, action)).toEqual({
      ...InitialState,
      promotions: action.payload
    });
  });
});