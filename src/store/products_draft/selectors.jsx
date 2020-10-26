export const MODULE_NAME = 'products';
export const selectProductsForFilter = state => state[MODULE_NAME];
export const selectProducts = state => state[MODULE_NAME].products;
export const selectLoader = state => state[MODULE_NAME].isDataLoaded;


