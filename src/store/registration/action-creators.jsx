const { REGISTER_CUSTOMER } = require("./action-types");

export const registerCustomer = payload => ({
  type: REGISTER_CUSTOMER,
  payload
})
