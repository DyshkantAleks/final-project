import {server} from '../../API';
import { addToFavorites, removeFromFavorites, setFavorites } from './actions-creators';

const updatedFavorites = async (state) => {
  const {customer} = state;


  if (customer.isLogined) {
    if (state.favorites.favorites.length > 0) {
      const productsInFav = state.favorites.favorites.map(item => { return {product: item._id} });
      const updatedFav = {products: productsInFav}
      try {
        await server.put('/wishlist', updatedFav)
      } catch (error) {
        console.log(error)
      }
    }
  }
}

export const getFavorites = () => async (dispatch, getState) => {
  const state = getState();
  const {customer} = state;
 
  if (customer.isLogined) {
    try {
      const {status, data} = await server.get('/wishlist')
      if (status === 200) {
        const itemsToFav = [...state.favorites.favorites, ...data.products];
        const result = new Set(itemsToFav);
        dispatch(setFavorites(result));
        const newState = getState();
        updatedFavorites(newState);
      }
    } catch (error) {
      console.log(error)
    }
  }
};

// export const getFavorites = () => async dispatch => {
//   try {
//     const {status, data} = await server.get('/wishlist')
//     console.log('Fav data', data)
//     if (status === 200) {
//       dispatch(setFavorites(data.products))
//     }
//   } catch (error) {
//     console.log(error)
//   }
// };

export const addProductToFav = (productItem) => (dispatch, getState) => {
  dispatch(addToFavorites(productItem));
  const state = getState();
  updatedFavorites(state);
}

export const removeProductFromFav = (productItem) => (dispatch, getState) => {
  dispatch(removeFromFavorites(productItem));
  const state = getState();
  updatedFavorites(state);
}

// export const addProductToFav = (productItem) => async dispatch => {
//   try {
//     const {status} = await server.put(`/wishlist/${productItem._id}`)
//     if (status === 200) {
//       dispatch(addToFavorites(productItem));
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

// export const removeProductFromFav = (productItem) => async dispatch => {
//   try {
//     const {status} = await server.delete(`/wishlist/${productItem}`)
//     if (status === 200) {
//       dispatch(removeFromFavorites(productItem));
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }
