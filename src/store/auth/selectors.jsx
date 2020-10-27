export const MODULE_NAME = 'auth';

export const selectLogin = state => state[MODULE_NAME].login;
export const selectPassword = state => state[MODULE_NAME].password;
export const selectToken = state => state[MODULE_NAME].token;
export const selectError = state => state[MODULE_NAME].error;