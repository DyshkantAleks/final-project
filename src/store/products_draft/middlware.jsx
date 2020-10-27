import React from 'react'
import {BASE_URL, server} from '../../API'
import {setProducts} from './actions'
import {setCatigories} from "../categories/actions";

export const getProducts = () => async (dispatch) => {
  try {
    const {status, data} = await server('/products');
    if (status === 200) {
      dispatch(setProducts(data))
    }
  } catch (error) {
    console.log(error)
  }
}
//getProducts()();

export const getProductsByCategory = (category) => async (dispatch) => {
  try {
    const {status, data} = await server(`/products/filter?category=${category}`);
    //console.log(data)
    if (status === 200) {
      dispatch(setProducts(data.products));
      //console.log(data)
    }
  } catch (error) {
    console.log(error)
  }
};

export const getProductsBySubCategory = (category) => async (dispatch) => {
  try {
    const {status, data} = await server(`/products/filter?subCategory=${category}`);
    //console.log(data)
    if (status === 200) {
      dispatch(setProducts(data.products));
      //console.log(data)
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
