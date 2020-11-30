import * as actions from './actions';

describe('Catecories actions', () => {
  it('serCategories(): should attach categories', () => {
    const expectAction = {
      type: actions.SET_CATEGORIES,
      payload: [1, 2, 3]
    };
    expect(actions.setCatigories(expectAction.payload)).toEqual(expectAction);
  });
});