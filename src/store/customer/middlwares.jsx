import { useHistory } from 'react-router'
import { server } from '../../API'
import { ROUTES } from '../../pages/navigation/routes'
import { auth } from '../auth/middlware'
import { setCustomer } from './action-creators'

export const registerCustomer = customer => async dispatch => {
  const history = useHistory()
  try {
    const { status, data} = await server.post('/customers', customer)
    if (status === 200) {
      dispatch(setCustomer(data))
      dispatch(auth(data.login, customer.password, history))
    }
  } catch (error) {
    console.log(error)
  }
}