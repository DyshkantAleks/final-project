import { server } from '../../API'
import { logOutCustomer } from '../customer/actions'
import { getCustomer } from '../customer/operations'

import { delLogin, delToken, setAuthError, setToken } from './actions'

export const setAuthToken = (token) => {
  server.defaults.headers.common.Authorization = token
}

export const logOut = () => dispatch => {
  server.defaults.headers.common.Authorization = ''
  dispatch(logOutCustomer())
  dispatch(delLogin())
  dispatch(delToken())
}
export const auth = (login, password) => async (dispatch) => {
  try {
    const {status, data} = await server.post('/customers/login',
      {
        loginOrEmail: login,
        password
      }
    )
    if (status === 200) {
      dispatch(setAuthError(null));
      dispatch(setToken(data.token));
      dispatch(getCustomer());
    }
  } catch (error) {
    dispatch(setAuthError(error))
  }
}