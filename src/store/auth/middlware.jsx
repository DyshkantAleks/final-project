import React from 'react'
import { server } from '../../API'
import { ROUTES } from '../../pages/navigation/routes'
import { getCart } from '../cart/middlware'
import { getFavorites } from '../favorites/middlware'
import { setAuthError, setToken } from './action-creators'
import { getCustomer } from '../customer/middlwares'


export const auth = (login, password, history) => async (dispatch, getState) => {
  const {} = getState()
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