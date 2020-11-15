export const SET_PRODUCTS = 'SET_PRODUCTS'
export const SET_LOADER = 'SET_LOADER'
export const SET_PRODUCT_ITEM = 'SET_PRODUCT_ITEM'

export const setProducts = payload => ({
  type: SET_PRODUCTS,
  payload
})
export const setLoader = () => ({
  type: SET_LOADER
})
export const setProductItem = () => ({
  type: SET_PRODUCT_ITEM
})
