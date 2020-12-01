export const MODULE_NAME = 'categories'

export const selectCategories = state => state[MODULE_NAME].categories

export const selectMainCategory = state => state[MODULE_NAME].categories.filter(e => e.isMainCategory === true)

export const selectByParentCategory = (category) => state => state[MODULE_NAME].categories.filter(e => e.parentId === category)

export const selectCategoryFromRoute = (route) => state => state[MODULE_NAME].categories.find(e => e.route === route)

export const selectPopularCategories = state => state[MODULE_NAME].categories.filter(e => e.isPopular === true)

