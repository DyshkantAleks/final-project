import { server } from '../../API'
import { setCatigories } from './actions'

export const getCategories = () => async (dispatch) => {
  try {
    const { status, data } = await server('/catalog')
    if (status === 200) {
      dispatch(setCatigories(data))
    }
  } catch (error) {
    console.log(error)
  }
}

