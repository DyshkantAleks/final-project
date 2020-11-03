import {server} from '../../API';
import { addToCart, quantityDown, quantityUp, removeFromCart, setCart } from './actions-creators';

export const getCart = () => async (dispatch, getState) => {
  const cartFromLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  const state = getState();
  const customer = {...state};
 
  if (customer.isLogined) {
    if (cartFromLocalStorage.length > 0) {
      const productsInCart = cartFromLocalStorage.map(item => { return {product: item.product._id, cartQuantity: item.cartQuantity} });
      const updatedCart = {products: productsInCart}
      try {
        await server.put('/cart', updatedCart)
      } catch (error) {
        console.log(error)
      }
    }
    try {
      const {status, data} = await server.get('/cart')
      if (status === 200) {
        dispatch(setCart(data.products))
      }
    } catch (error) {
      console.log(error)
    }
  } else {
    dispatch(setCart(cartFromLocalStorage));
  }
};

export const addProductToCart = (productItem, quantity) => async (dispatch, getState) => {
  dispatch(addToCart({product: productItem, cartQuantity: quantity}));
  const state = getState();
  // localStorage.setItem('cart', JSON.stringify(state.cart.cart));

  const customer = {...state};
  
  if (customer.isLogined) {
    const productsInCart = state.cart.cart.map(item => { return {product: item.product._id, cartQuantity: item.cartQuantity} });
    const updatedCart = {products: productsInCart}
    try {
      await server.put('/cart', updatedCart)
    } catch (error) {
      console.log(error)
    }
  }
}

export const removeProductFromCart = (productId) => async (dispatch, getState) => {
  dispatch(removeFromCart(productId));
  const state = getState();
  // localStorage.setItem('cart', JSON.stringify(state.cart.cart));

  const customer = {...state};
  
  if (customer.isLogined) {
    const productsInCart = state.cart.cart.map(item => { return {product: item.product._id, cartQuantity: item.cartQuantity} });
    const updatedCart = {products: productsInCart}
    try {
      await server.put('/cart', updatedCart)
    } catch (error) {
      console.log(error)
    }
  }
}

export const increaseQuantity = (productId) => async (dispatch, getState) => {
  dispatch(quantityUp(productId));
  const state = getState();
  // localStorage.setItem('cart', JSON.stringify(state.cart.cart));

  const customer = {...state};
  if (customer.isLogined) {
    const productsInCart = state.cart.cart.map(item => { return {product: item.product._id, cartQuantity: item.cartQuantity} });
    const updatedCart = {products: productsInCart}
    try {
      await server.put('/cart', updatedCart)
    } catch (error) {
      console.log(error)
    }
  }
}

export const decreaseQuantity = (productId) => async (dispatch, getState) => {
  dispatch(quantityDown(productId));
  const state = getState();
  // localStorage.setItem('cart', JSON.stringify(state.cart.cart));

  const customer = {...state};
  if (customer.isLogined) {
    const productsInCart = state.cart.cart.map(item => { return {product: item.product._id, cartQuantity: item.cartQuantity} });
    const updatedCart = {products: productsInCart}
    try {
      await server.put('/cart', updatedCart)
    } catch (error) {
      console.log(error)
    }
  }
}