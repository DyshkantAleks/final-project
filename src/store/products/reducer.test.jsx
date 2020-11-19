import { reducer, InitialState } from './reducer';
import * as actions from './actions';

describe('Products reducer', () => {
  it('SET_LOADER', () => {
    const action = {
      type: actions.SET_LOADER,
    };

    expect(reducer(InitialState, action)).toEqual({
      ...InitialState,
      isDataLoaded: true,
    });
  });

  it('SET_PRODUCTS', () => {
    const initialState = {
      products: [],
      isDataLoaded: false,
    };

    const action = {
      type: actions.SET_PRODUCTS,
      payload: [1, 2, 3],
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      products: action.payload,
      isDataLoaded: false,
    });
  });
});
