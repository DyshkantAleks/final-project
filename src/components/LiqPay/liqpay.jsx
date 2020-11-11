const LiqPay = require('../../utils/liqpay');
export const liqpay = new LiqPay(process.env.REACT_APP_PUBLIC_KEY, process.env.REACT_APP_PRIVATE_KEY);
export const params = liqpay.cnb_object({
  action: 'pay',
  amount: '1',
  currency: 'UA',
  description: 'description text',
  order_id: 'order_id_1',
  version: '3',
});
