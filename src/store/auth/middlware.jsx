import React from 'react'
import { server } from '../../API'
import { ROUTES } from '../../pages/navigation/routes'
import { setAuthError, setLogin, setToken } from './action-creators'

export const auth = (login, password, history) => async dispatch => {
 
  try {
    const {status, data} = await server.post('/customers/login',
      {
        loginOrEmail: login,
        password
      }
    )
    if (status === 200) {
      
      dispatch(setLogin(login))
      dispatch(setToken(data.token))
      dispatch(setAuthError(null))
      server.defaults.headers.common['Authorization'] = data.token
      history.push(ROUTES.HOMEPAGE);
    }
    
    console.log(status, data)
  } catch (error) {
    dispatch(setAuthError(error))
  }
}
