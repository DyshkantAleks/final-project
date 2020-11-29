import { reducer, InitialState } from './reducer.jsx';
import * as actions from '.types';

describe('order reducer', () => {
  it('SET_ORDER', () => {
  
    const action = {
      type: actions.SET_ORDER,
      payload: {order: 'order'}
    }
    expect(reducer(InitialState, action)).toEqual({
      ...InitialState,
      order: action.payload,
    });
  });
})