import React from 'react'
import { Button } from '../Button'
import {GlobalConfig} from '../../GlobalConfig';
const LiqPay = require('../../utils/liqpay');

const liqpay = new LiqPay(GlobalConfig.REACT_APP_PUBLIC_KEY, GlobalConfig.REACT_APP_PRIVATE_KEY);


export const LiqPaySheckout = props => {
  const {id, totalSum} = props
  const params = liqpay.cnb_object({
    action: 'pay',
    amount: totalSum,
    currency: 'UAH',
    description: 'description text',
    order_id: id,
    version: '3',
    result_url: 'http://localhost:3000/'
  });
 
  return (
    <form method="POST" action="https://www.liqpay.ua/api/3/checkout" accept-charset="utf-8"> 
      <input type="hidden" name="data" value={params.data} />
      <input type="hidden" name="signature" value={params.signature} />
      <Button type="submit" text='Оплатить'/>
    </form>
  )
}