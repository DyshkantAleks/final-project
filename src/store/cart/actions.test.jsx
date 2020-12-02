import * as types from './types.jsx';
import * as actions from './actions.jsx';

<<<<<<< HEAD
describe('cart actions', () => { 
=======
describe('cart actions', () => {
>>>>>>> dev
  it('should create an action to add item to cart', () => {
    const id = 123;
    const expectedAction = {
      type: types.ADD_TO_CART,
      payload: id
    };
    expect(actions.addToCart(id)).toEqual(expectedAction)
  });

  it('should create an action to delete anitem from cart', () => {
    const id = 321;
    const expectedAction = {
      type: types.REMOVE_FROM_CART,
      payload: id
    };
    expect(actions.removeFromCart(id)).toEqual(expectedAction)
  })
})