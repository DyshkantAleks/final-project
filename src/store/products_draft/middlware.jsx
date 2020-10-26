import React from 'react'
import {BASE_URL, server} from '../../API'
import {setProducts} from './actions'
import {setCatigories} from "../categories/actions";

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
//getChairs()();

// export const getAllChairs = () => async (dispatch) => {
//   try {
//     const {data} = await server('/products/filter?category=Стулья');
//     console.log(data)
//     if (status === 200) {
//       dispatch(setProducts(data))
//       console.log(data)
//     }
//   } catch (error) {
//     console.log(error)
//   }
// };
//
// export const getAllTables = () => async (dispatch) => {
//   try {
//     const {data} = await server('/products/filter?category=Столы');
//     console.log(data)
//     if (status === 200) {
//       dispatch(setProducts(data))
//       console.log(data)
//     }
//   } catch (error) {
//     console.log(error)
//   }
// };
//
// export const getAllSofas = () => async (dispatch) => {
//   try {
//     const {data} = await server('/products/filter?category=Диваны');
//     console.log(data)
//     if (status === 200) {
//       dispatch(setProducts(data))
//       console.log(data)
//     }
//   } catch (error) {
//     console.log(error)
//   }
// };
//
// export const getAllStorage = () => async (dispatch) => {
//   try {
//     const {data} = await server('/products/filter?category=Хранение');
//     cconsole.log(data)
//     if (status === 200) {
//       dispatch(setProducts(data))
//       console.log(data)
//     }
//   } catch (error) {
//     console.log(error)
//   }
// };
//
// export const getAllAccessorise = () => async (dispatch) => {
//   try {
//     const {data} = await server('/products/filter?category=Аксессуары');
//     console.log(data)
//     if (status === 200) {
//       dispatch(setProducts(data))
//       console.log(data)
//     }
//   } catch (error) {
//     console.log(error)
//   }
// };


