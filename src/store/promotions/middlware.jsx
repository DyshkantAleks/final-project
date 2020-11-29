
import { server } from '../../API'
import { setPromotions } from './actions'

export const getPromotions = () => async (dispatch) => {
  try {
    const { status, data } = await server('/slides')
    // console.log(data);
    if (status === 200) {
      dispatch(setPromotions(data))
      // console.log(data)
    }
  } catch (error) {
    console.log(error)
  }
}
