import { reducer } from './reducer';
import * as actions from './types';

describe('Auth reducer', () => {
  it('SET_LOGIN', () => {
    const initialState = {
      login: 'User',
    };
    const action = {
      type: actions.SET_LOGIN,
      payload: 'Gest'
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      login: action.payload
    });
  });
  it('SET_TOKEN', () => {
    const initialState = {
      token: null
    };
    const action = {
      type: actions.SET_TOKEN,
      payload: 'testToken'
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      token: action.payload
    });
  });
  it('SET_AUTH_ERROR', () => {
    const initialState = {
      error: []
    };
    const action = {
      type: actions.SET_AUTH_ERROR,
      payload: [1, 2, 3]
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      error: action.payload
    });
  });
  it('SET_PASSWORD', () => {
    const initialState = {
      password: null
    };
    const action = {
      type: actions.SET_PASSWORD,
      payload: 'testPassword'
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      password: action.payload
    });
  });
  it('DEL_LOGIN', () => {
    const stateBefore = {
      login: 'Guest'
    };
    const action = {
      type: actions.DEL_LOGIN
    };
    expect(reducer(stateBefore, action)).toEqual({
      ...stateBefore,
      login: 'User'
    });
  });
  it('DEL_TOKEN', () => {
    const stateBefore = {
      token: 'testToken'
    };
    const action = {
      type: actions.DEL_TOKEN
    };
    expect(reducer(stateBefore, action)).toEqual({
      ...stateBefore,
      token: null
    });
  });
});