import { LOGOUT_CUSTOMER, SET_CUSTOMER } from './action-types'

export const setCustomer = payload => ({
  type: SET_CUSTOMER,
  payload
})
export const logOutCustomer = () => ({
  type: LOGOUT_CUSTOMER
})
