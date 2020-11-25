import {GlobalConfig} from '../../GlobalConfig';
const LiqPay = require('../../utils/liqpay');

export const liqpay = new LiqPay(GlobalConfig.REACT_APP_PUBLIC_KEY, GlobalConfig.REACT_APP_PRIVATE_KEY);

export const params = liqpay.cnb_object({
  action: 'pay',
  amount: '1',
  currency: 'UAH',
  description: 'description text',
  order_id: 'order_id_5',
  version: '3',
  result_url: 'http://localhost:3000/'
});
