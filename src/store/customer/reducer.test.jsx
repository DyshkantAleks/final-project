import { reducer } from './reducer';
import * as actions from './types';

describe('Customer reducer', () => {
  it('SET_CUSTOMER', () => {
    const initialState = {
      customer: {
        name: 'Пользователь'
      },
      isLogined: false
    };

    const action = {
      type: actions.SET_CUSTOMER,
      payload: {
        customer: {
          name: 'Gest'
        }
      }
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      customer: {...initialState.customer, ...action.payload},
      isLogined: true
    })
  });

  it('LOGOUT_CUSTOMER', () => {
    const stateBefore = {
      customer: {
        name: 'Вход'
      },
      isLogined: true
    };
    const action = {
      type: actions.LOGOUT_CUSTOMER
    };
    expect(reducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isLogined: false
    });
  });
  it('SET_CUSTOMER_ERROR', () => {
    const initialState = {
      customer: {
        name: 'Пользователь'
      },
      isLogined: false,
      error: null
    };
    const action = {
      type: actions.SET_CUSTOMER_ERROR,
      payload: 'testError'
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      error: action.payload
    });
  });
})