
import { server } from '../../API'

import { setCustomer } from './action-creators'

export const registerCustomer = customer => async dispatch => {
 
  try {
    const { status, data} = await server.post('/customers', customer)
   
    if (status === 200) {
      dispatch(setCustomer(data))
    }
  } catch (error) {
    console.log(error.response.data)
  }
}