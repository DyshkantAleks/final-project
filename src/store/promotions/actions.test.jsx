import { setPromotions } from './actions';
import * as actions from './types';

describe('Set promotions action', () => {
  it('setPromotions(): should set promotions', () => {
    const expectedActions = {
      type: actions.SET_PROMOTIONS,
      payload: [1, 2, 3],
    };
    expect(setPromotions(expectedActions.payload)).toEqual(expectedActions)
  });
});