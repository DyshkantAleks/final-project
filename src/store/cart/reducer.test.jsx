import { reducer, InitialState } from './reducer.jsx';
import * as actions from './action-types.jsx';

describe('cart reducer', () => {
  it('SET_CART', () => {

    const cartArray = [1, 2, 3]
    const action = {
      type: actions.SET_CART,
      payload: cartArray
    }
    expect(reducer(InitialState, action)).toEqual({
      ...InitialState,
      cart: action.payload,
    });
  });

  it('ADD_TO_CART', () => {
    const InitialState = {
      cart: []
    };
    const itemToCart = 123;
    const action = {
      type: actions.ADD_TO_CART,
      payload: itemToCart
    }
    expect(reducer(InitialState, action)).toEqual({
      ...InitialState,
      cart: [...InitialState.cart, action.payload]
    });
  });
});