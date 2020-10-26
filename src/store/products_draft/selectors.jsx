export const MODULE_NAME = 'products';
export const selectProductsForFilter = state => state[MODULE_NAME];
export const selectProducts = state => state[MODULE_NAME].products;
export const selectLoader = state => state[MODULE_NAME].isDataLoaded;



export const selectById = (name) => state => state[MODULE_NAME].products.find(item => item.name === name);