import React from 'react'
import { BASE_URL, server } from '../../API'
import { setProducts } from './actions'

export const getProducts = () => async (dispatch) => {
  try {
    const {status, data} = await server('/products')
    console.log(data)
    if (status === 200) {
      dispatch(setProducts(data))
      console.log(data)
    }
  } catch (error) {
    console.log(error)
  }
}
