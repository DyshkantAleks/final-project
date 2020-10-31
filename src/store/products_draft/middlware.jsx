import {server} from '../../API'
import {setProducts} from './actions'


export const getProducts = () => async (dispatch) => {
  try {
    const {status, data} = await server('/products');
    if (status === 200) {
      dispatch(setProducts(data))
    }
  } catch (error) {
    console.log(error)
  }
};



export const getProductsByIsPopular = () => async (dispatch) => {
  try {
    const {status, data} = await server(`/products/filter?isTopRated=true`);
    //console.log(data)
    if (status === 200) {
      dispatch(setProducts(data.products));
      //console.log(data)
    }
  } catch (error) {
    console.log(error)
  }
};

export const getProductsByIsNew = () => async (dispatch) => {
  try {
    const {status, data} = await server(`/products/filter?isNew=true`);
    //console.log(data)
    if (status === 200) {
      dispatch(setProducts(data.products));
      //console.log(data)
    }
  } catch (error) {
    console.log(error)
  }
};
