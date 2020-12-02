import * as actions from './types';
import {setLogin, setAuthError, setToken, delLogin, delToken} from './actions';

describe('Auth actions', () => {
  it('setLogin(): should set login at user', () => {
    const expectedAction = {
      type: actions.SET_LOGIN,
      payload: {login: 'User'}
    };
    expect(setLogin(expectedAction.payload)).toEqual(expectedAction);
  });
  it('setToken(): should set token', () => {
    const expectedAction = {
      type: actions.SET_TOKEN,
      payload: {token: ''}
    };
    expect(setToken(expectedAction.payload)).toEqual(expectedAction);
  });
  it('setAuthError(): should set error', () => {
    const expectedAction = {
      type: actions.SET_AUTH_ERROR,
      payload: {error: [1, 2, 3]}
    };
    expect(setAuthError(expectedAction.payload)).toEqual(expectedAction);
  });
  it('delLogin(): should delete login', () => {
    const expectedAction = {
      type: actions.DEL_LOGIN
    };
    expect(delLogin(expectedAction)).toEqual(expectedAction);
  });
  it('delToken(): should delete token', () => {
    const expectedAction = {
      type: actions.DEL_TOKEN
    };
    expect(delToken(expectedAction)).toEqual(expectedAction);
  });
});