import React from 'react'


export const LiqpayV = (props) =>{
  const {params } = props
  console.log(props)
  return(
    <form method="POST" action="https://www.liqpay.ua/api/3/checkout" accept-charset="utf-8"> 
    <input type="hidden" name="data" value={params.data} /> 
    <input type="hidden" name="signature" value={params.signature} />               
    <input type="image" src="//static.liqpay.ua/buttons/p1+language+.radius.png" name="btn_text" /> +
</form>
  )
}