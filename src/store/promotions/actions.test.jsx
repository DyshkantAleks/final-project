import { setPromotions } from './actions-creators';
import * as actions from './action-types';

describe('Set promotions action', () => {
  it('setPromotions(): should set promotions', () => {
    const expectedActions = {
      type: actions.SET_PROMOTIONS,
      payload: [1, 2, 3],
    };
    expect(setPromotions(expectedActions.payload)).toEqual(expectedActions)
  });
});