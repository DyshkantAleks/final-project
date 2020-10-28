import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { selectCart } from '../../store/cart/selectors';
import {CartItem} from './CartItem';
import { Button } from '../../components/Button'
import { Header } from '../../commons/Header/Header';

export const CartPage = () => {

  const cartItems = useSelector(selectCart);
  
  const sumCart = cartItems.reduce(function (sum, current) {
    return sum + current.product.currentPrice * current.cartQuantity
  }, 0)

  const menuArray = [null, null, 'Назва товару', 'Колір', 'Кількість', 'Ціна'];
  return (
    <>
      <Header/>
      <h1>Кошик</h1>

      <CartContainer>
        <CartMenu>
          {menuArray.map((item, index) => <p key={index}>{item}</p>)}
        </CartMenu>
        {
          cartItems.map(item =>
            <CartItem
              {...item.product}
              cartQuantity={item.cartQuantity}
              key={item.id}
            />
          )}
      </CartContainer>

      <CartTotalContainer>
        <CartTotalText>Всього у кошику {cartItems.length} товари на суму {sumCart.toLocaleString()}</CartTotalText>
        <Button text="Оформити замовлення" color="green" />
      </CartTotalContainer>
    </>
  )
}

const CartContainer = styled.div`
 max-width: 120rem;
 margin: 0 auto;
`

const CartMenu = styled.div`
    background-color: #F5F5F5;
    display: grid;
    grid-template-columns: 5% 10% 20% 1fr 1fr 10%;
    grid-gap: 1.9rem;
    padding: 0.7rem 1.7rem;

    p {
        font-size: 14px;
        // padding: 0.8rem;
        color: #007042;
        font-weight: bold;
    }
`

const CartTotalContainer = styled.div`
padding-top: 2rem;
display: flex; 
justify-content: space-between;
max-width: 120rem;
margin: 0 auto;
`

const CartTotalText = styled.h4`
font-size: 1.5rem;
color: #000000;
`