import React from 'react'
import { Button } from '../Button'
export const LiqPaySheckout = props => {
  const {params} = props
 
  return (
    <form method="POST" action="https://www.liqpay.ua/api/3/checkout" accept-charset="utf-8"> +
      <input type="hidden" name="data" value={params.data} /> +
      <input type="hidden" name="signature" value={params.signature} />
      <Button type="submit" text='Оплатить'/>
    </form>
  )
}