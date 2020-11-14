export const MODULE_NAME = 'customer'

export const selectLogin = state => state[MODULE_NAME].login;
export const selectPassword = state => state[MODULE_NAME].password;
export const selectToken = state => state[MODULE_NAME].token;
export const selectError = state => state[MODULE_NAME].error;
export const selectCustomer = state => state[MODULE_NAME].customer
export const selectCustomerIslogined = state => state[MODULE_NAME].isLogined