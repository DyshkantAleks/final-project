import React from 'react'
import { BASE_URL, server } from '../../API'
import {setCatigories} from "../categories/actions";

export const getCategories = () => async (dispatch) => {
  try {
    const {status, data} = await server('/cate')
    console.log(data);
    if (status === 200) {
      dispatch(setCatigories(data))
      console.log(data)
    }
  } catch (error) {
    console.log(error)
  }
}
