import {server} from '../../API';
import { addToFavorites, removeFromFavorites, setFavorites } from './actions-creators';

export const getFavorites = () => async dispatch => {
  try {
    const {status, data} = await server.get('/wishlist')
    console.log('Fav data', data)
    if (status === 200) {
      dispatch(setFavorites(data.products))
    }
  } catch (error) {
    console.log(error)
  }
};

export const addProductToFav = (productItem) => async dispatch => {
  try {
    const {status} = await server.put(`/wishlist/${productItem._id}`)
    if (status === 200) {
      dispatch(addToFavorites(productItem));
    }
  } catch (error) {
    console.log(error)
  }
}

export const removeProductFromFav = (productItem) => async dispatch => {
  try {
    const {status} = await server.delete(`/wishlist/${productItem}`)
    if (status === 200) {
      dispatch(removeFromFavorites(productItem));
    }
  } catch (error) {
    console.log(error)
  }
}
