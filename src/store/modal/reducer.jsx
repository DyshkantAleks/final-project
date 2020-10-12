import { OPEN_MODAL, CLOSE_MODAL } from './actions'

const initialState = {
  
  isOpenModal: false,
  content: {}
};
  
export function reducer (state = initialState, { type, payload }) {
  switch (type) {
    case OPEN_MODAL:
      return {
        ...state,
        content: payload,
        isOpenModal: true,
         
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isOpenModal: false,
      };
    default:
      return state;
  }
}