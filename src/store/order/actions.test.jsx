import { setOrder } from './actions-creators';
import * as actions from './types';

describe('Set order action', () => {
  it('setOrder(): should set order', () => {
    const expectedActions = {
      type: actions.SET_ORDER,
      payload: [1, 2, 3],
    };
    expect(setOrder(expectedActions.payload)).toEqual(expectedActions)
  });
});