import React from 'react'
import { server } from '../../API'


import { getCustomer } from '../customer/middlwares'
import { setAuthError, setLogin, setToken } from './action-creators'

export const setAuthToken = (token) => {
  server.defaults.headers.common['Authorization'] = token
}
export const auth = (login, password, history) => async (dispatch) => {
    
  try {
    const {status, data} = await server.post('/customers/login',
      {
        loginOrEmail: login,
        password
      }
    )
    if (status === 200) {
      dispatch(setToken(data.token))
      dispatch(setAuthError(null))
      dispatch(getCustomer())
    }
    history.goBack();
    console.log(status, data)
  } catch (error) {
    dispatch(setAuthError(error))
  }
}