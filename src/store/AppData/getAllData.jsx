import { getCart } from "./cart/middlware"
import { getProducts } from "./products_draft/middlware"
import { getCategories } from "./categories/middlware"
export const dataLoaded = {LOADED: false}
export function getAllData () {
  return (dispatch) => Promise.all([
    dispatch(getProducts()),
    dispatch(getCart()),
    dispatch(getCategories())
  ]).then(() => { dataLoaded.LOADED = true })
}