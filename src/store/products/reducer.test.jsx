import { reducer } from './reducer';
import * as actions from './types';

describe('Products reducer', () => {
  it('SET_LOADER', () => {
    const initialState = {
      products: [],
      isDataLoaded: true
    };
    const action = {
      type: actions.SET_LOADER
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isDataLoaded: true
    });
  });
  it('SET_PRODUCTS', () => {
    const initialState = {
      products: [],
      isDataLoaded: false
    };
    const action = {
      type: actions.SET_PRODUCTS,
      payload: [1, 2, 3]
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      products: action.payload,
      isDataLoaded: false
    });
  });
});