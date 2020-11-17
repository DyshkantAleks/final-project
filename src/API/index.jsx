import Axios from 'axios'

export const BASE_URL = 'https://dg-shop.herokuapp.com/api'
const LIQPAY_URL = 'https://www.liqpay.ua/api'

export const server = Axios.create({
  baseURL: BASE_URL
});

export const liqPayServer = Axios.create({
  baseURL: LIQPAY_URL
});