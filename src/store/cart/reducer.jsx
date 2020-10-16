import { ADD_TO_CART, DEL_FROM_CART } from './action-types';

const initialState = {
  cart: {
    id: 1,
    quantityCart: 2
  }
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