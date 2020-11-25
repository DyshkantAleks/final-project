import { LOGOUT_CUSTOMER, SET_CUSTOMER, SET_CUSTOMER_ERROR } from './types'

export const setCustomer = payload => ({
  type: SET_CUSTOMER,
  payload
})
export const logOutCustomer = () => ({
  type: LOGOUT_CUSTOMER
  
})
export const setCustomerError = payload => ({
  type: SET_CUSTOMER_ERROR,
  payload
})
