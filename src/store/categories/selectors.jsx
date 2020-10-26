export const MODULE_NAME = 'categories';

export const selectCategories = state => state[MODULE_NAME].categories;

export const selectMainCategory = state => state[MODULE_NAME].categories.filter(e => e.parentId === "null");

export const selectByParentCategory = (category) => state => state[MODULE_NAME].categories.filter(e => e.parentId === category);

export const selectCategoryFromRoute = (route) => state => state[MODULE_NAME].categories.find(e => e.route === route);

export const selectPopularCategories  = state => state[MODULE_NAME].categories.filter(e => e.isPopular === true);
//export const selectById = (id) => state => state[MODULE_NAME].promotions.find(e => e.route === id);