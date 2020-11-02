import { REGISTER_CUSTOMER } from './action-types'

const initialState = {
  firstName: '',
  lastName: '',
  login: '',
  email: '',
  password: '',
  telephone: '',
  gender: '',
  avatarUrl: '',
  isAdmin: false
}
export function reducer (state = initialState, { type, payload }) {
  switch (type) {
    case REGISTER_CUSTOMER:
      return {
        ...state,
        payload
      }
    default:
      return state
  }
}
