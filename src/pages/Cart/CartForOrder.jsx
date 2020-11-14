import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectCart } from '../../store/AppData/cart/selectors'
import { CartImage, CartNameCode, CartPrice } from '../Delivery/CartItem'

// FOR ORDERING - DELETE IN CASE OF UNUSE
export const CartForOrder = (params) => {
  const cartItems = useSelector(selectCart)

  return (
    <Container>
      <h3>Товары в корзине</h3>
      {
        cartItems.map(({ ...item }) =>
          <Item>
            <CartImage src={item.image} key={item.code} />
            <CartNameCode>
              <h4>{item.name}</h4>
              <p>{item.code}</p>
              <p>Цвет: {item.color}</p>
            </CartNameCode>
            <CartPrice>{item.price} грн</CartPrice>
          </Item>
        )
      }
    </Container>

  )
}

const Container = styled.div`
background-color: #A0A9AF;
max-width: 510px;
width: 100%;


h3 {
color: #FFF;
font-weight: bold;
font-size: 1.2rem;
font-family: Open Sans;
padding: 10px 20px;
text-align: left;
margin: 0;
}
`

const Item = styled.div`
    padding: 15px;
    display: flex;
    justify-content: space-between;
    background-color: #F5F5F5;
    width: 100%;
    box-sizing: border-box;
`
