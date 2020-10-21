export const MODULE_NAME = 'promotions';

export const selectPromotions = state => state[MODULE_NAME].promotions;

export const selectById = (id) => state => state[MODULE_NAME].promotions.find(e => e.route === id);