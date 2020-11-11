import { server } from '../../API'
import { logOutCustomer } from '../customer/action-creators'
import { getCustomer } from '../customer/middlwares'

import { delLogin, delToken, setAuthError, setToken } from './action-creators'

export const setAuthToken = (token) => {
  server.defaults.headers.common.Authorization = token
}

export const logOut = () => dispatch => {
  server.defaults.headers.common.Authorization = ''
  dispatch(logOutCustomer())
  dispatch(delLogin())
  dispatch(delToken())
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
      dispatch(setToken(data.token));
      dispatch(setAuthError(null));
      dispatch(getCustomer());
    }
    history.goBack();
    
  } catch (error) {
    dispatch(setAuthError(error))
  }
}