export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_LOADER = 'SET_LOADER';

export const setProducts = payload => ({
  type: SET_PRODUCTS,
  payload
});

export const setLoader = () => ({
  type: SET_LOADER
});
