const LiqPay = require('../../utils/liqpay');
const REACT_APP_PUBLIC_KEY = 'sandbox_i58889583207'
const REACT_APP_PRIVATE_KEY = 'sandbox_pVJv7Gf09lfFEVCQISpdO2nCUwQ7OxbQVFaIXdU9'
export const liqpay = new LiqPay(REACT_APP_PUBLIC_KEY, REACT_APP_PRIVATE_KEY);
console.log(process.env.REACT_APP_PUBLIC_KEY, process.env.REACT_APP_PRIVATE_KEY)
export const params = liqpay.cnb_object({
  action: 'pay',
  amount: '1',
  currency: 'UAH',
  description: 'description text',
  order_id: 'order_id_4',
  version: '3',
  result_url: 'http://localhost:3000/'
});
