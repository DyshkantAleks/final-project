import { server } from '../../API';
import {
  addToCart,
  quantityDown,
  quantityUp,
  removeFromCart,
  setCart,
} from './actions-creators';

const updateCart = async (state) => {
  const { customer } = state;

  if (customer.isLogined) {
    if (state.cart.cart.length > 0) {
      const productsInCart = state.cart.cart.map((item) => {
        return { product: item.product._id, cartQuantity: item.cartQuantity };
      });
      const updatedCart = { products: productsInCart };
      try {
        await server.put('/cart', updatedCart);
      } catch (error) {
        console.log(error);
      }
    }
  }
};

export function unique (arr) {
  const res = new Map();
  return arr.filter(
    (a) => !res.has(a.product._id) && res.set(a.product._id, 1)
  );
}

export const getCart = () => async (dispatch, getState) => {
  const state = getState();
  const { customer } = state;

  if (customer.isLogined) {
    try {
      const { status, data } = await server.get('/cart');
      if (status === 200) {
        const sumTwoCart = [...state.cart.cart, ...data.products];
        const result = unique(sumTwoCart);
        dispatch(setCart(result));
        const newState = getState();
        updateCart(newState);
      }
    } catch (error) {
      console.log(error);
    }
  }
};

export const addProductToCart = (productItem, quantity) => (
  dispatch,
  getState
) => {
  dispatch(addToCart({ product: productItem, cartQuantity: quantity }));
  const state = getState();
  updateCart(state);
};

export const removeProductFromCart = (productId) => async (
  dispatch,
  getState
) => {
  dispatch(removeFromCart(productId));
  const state = getState();
  const { customer } = state;

  if (customer.isLogined) {
    try {
      await server.delete(`/cart/${productId}`);
    } catch (error) {
      console.log(error);
    }
  }
};

export const increaseQuantity = (productId) => (dispatch, getState) => {
  dispatch(quantityUp(productId));
  const state = getState();
  updateCart(state);
};

export const decreaseQuantity = (productId) => (dispatch, getState) => {
  dispatch(quantityDown(productId));
  const state = getState();
  updateCart(state);
};
export const checkQuantity = (products = [], cart = []) => {
  return cart.reduce(
    (acc, rec) => {
      products.forEach((item) => {
        if (item.itemNo === rec.product.itemNo) {
          if (item.quantity < rec.cartQuantity) {
            acc.push({product: item, quantity: rec.cartQuantity - item.quantity });
          }
        }
      });
      return acc
    },

    []
  );
};