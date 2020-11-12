export const MODULE_NAME = 'modal'

export const selectModalIsOpen = state => state[MODULE_NAME].isOpenModal
export const selectModalContent = state => state[MODULE_NAME].content
export const selectModalTitle = state => state[MODULE_NAME].title
export const selectModalActions = state => state[MODULE_NAME].actions
