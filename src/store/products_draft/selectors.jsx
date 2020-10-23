export const MODULE_NAME = 'products';
export const selectProducts = state => state[MODULE_NAME].products;
export const selectLoader = state => state[MODULE_NAME].isDataLoaded;
export const selectProductItem = state => state[MODULE_NAME].productItem;
