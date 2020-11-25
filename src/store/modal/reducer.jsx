import { CLOSE_MODAL, OPEN_MODAL } from './types';

const initialState = {
  isOpenModal: false,
  content: {},
  title: '',
  actions: {}
}

export function reducer (state = initialState, { type, payload }) {
  switch (type) {
    case OPEN_MODAL:
      return {
        ...state,
        content: payload.content,
        title: payload.title,
        actions: payload.actions,
        isOpenModal: true

      }
    case CLOSE_MODAL:
      return {
        ...state,
        isOpenModal: false
      }
    default:
      return state
  }
}
