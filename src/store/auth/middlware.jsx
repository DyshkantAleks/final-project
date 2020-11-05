import React from 'react'
import { server } from '../../API'
import { ROUTES } from '../../pages/navigation/routes'
import { getCart } from '../cart/middlware'
import { setCustomer } from '../customer/action-creators'
import { setAuthError, setLogin, setToken } from './action-creators'

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
      server.defaults.headers.common['Authorization'] = data.token
      const {status, data: customerData} = await server.get('/customers/customer')
      if (status === 200) {
        dispatch(setCustomer(customerData));
        dispatch(getCart());
      }
      history.push(ROUTES.HOMEPAGE);
    }
    
    console.log(status, data)
  } catch (error) {
    dispatch(setAuthError(error))
  }
}
