import { server } from '../../API'
import { setCatigories } from '../categories/actions'

export const getCategories = () => async (dispatch) => {
  try {
    const { status, data } = await server('/catalog')
    // console.log(data);
    if (status === 200) {
      dispatch(setCatigories(data))
      // console.log(data)
    }
  } catch (error) {
    console.log(error)
  }
}

// export const getChairs = () => async (dispatch) => {
//   try {
//     const {data} = await server('/products/filter?category=chairs');
//     //console.log(data);
//     dispatch(setCatigories(data));
//     //console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// };
// getChairs()();

// export const getCategories = () => async dispatch => {
//   try {
//     const res = await fetch('/db_categories.json');
//     const data = await res.json();
//     dispatch(setCatigories(data));
//   } catch (err) {
//     console.log(err);
//   }
// };
