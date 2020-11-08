export const MODULE_NAME = 'favorites'
export const selectFavorites = state => state[MODULE_NAME].favorites;
export const selectLoader = state => state[MODULE_NAME].isFavReady;
