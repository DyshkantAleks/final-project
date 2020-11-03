import {server} from '../../API';
import { addToCart, quantityDown, quantityUp, removeFromCart, setCart } from './actions-creators';

export const getCart = () => async dispatch => {
  try {
    const {status, data} = await server.get('/cart')
    console.log('data', data)
    if (status === 200) {
      dispatch(setCart(data.products))
    }
  } catch (error) {
    console.log(error)
  }
};

export const addProductToCart = (productItam, quantity) => async dispatch => {
  try {
    const {status} = await server.put(`/cart/${productItam._id}`)
    if (status === 200) {
      dispatch(addToCart({product: productItam, cartQuantity: quantity}));
      console.log('add cart')
    }
  } catch (error) {
    console.log(error)
  }
}

export const removeProductFromCart = (productId) => async dispatch => {
  try {
    const {status} = await server.delete(`/cart/${productId}`)
    if (status === 200) {
      dispatch(removeFromCart(productId));
    }
  } catch (error) {
    console.log(error)
  }
}

export const increaseQuantity = (productId) => async dispatch => {
  try {
    const {status} = await server.put(`/cart/${productId}`)
    if (status === 200) {
      dispatch(quantityUp(productId));
    }
  } catch (error) {
    console.log(error)
  }
}

export const decreaseQuantity = (productId) => async dispatch => {
  try {
    const {status} = await server.delete(`/cart/product/${productId}`)
    if (status === 200) {
      dispatch(quantityDown(productId));
    }
  } catch (error) {
    console.log(error)
  }
}