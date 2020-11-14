export const MODULE_NAME = 'products'
export const selectProductsForFilter = state => state[MODULE_NAME]
export const selectProducts = state => state[MODULE_NAME].products
export const selectLoader = state => state[MODULE_NAME].isDataLoaded
export const selectByRoute = (route) => state => state[MODULE_NAME].products.find(item => item.route === route)
export const selectById = (id) => state => state[MODULE_NAME].products.find(item => item._id === id)
