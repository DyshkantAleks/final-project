
import { server } from '../../API'
import { setPromotions } from './actions'

export const getPromotions = () => async (dispatch) => {
  try {
    const { status, data } = await server('/slides')
    if (status === 200) {
      dispatch(setPromotions(data))
    }
  } catch (error) {
    console.log(error)
  }
}
