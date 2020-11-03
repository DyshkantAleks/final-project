import Axios from 'axios'

export const BASE_URL = 'https://dg-shop.herokuapp.com/api'

export const server = Axios.create({
  baseURL: BASE_URL
});
