import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { selectCart } from '../../store/cart/selectors';
import { CartItem } from './CartItem.jsx';
import { Button } from '../../components/Button'
import { Header } from '../../commons/Header/Header';
import { Title } from '../../components/Title/Title';
import { getProductList } from '../../store/products_draft/actions';
import { selectProducts } from '../../store/products_draft/selectors';
import { getCartList } from '../../utils/filters';
import { device } from '../../styles/breakpoints/breakpoints';


export const CartPage = () => {
  const dispatch = useDispatch()

  // -- tempurary --
  useEffect(() => {
    dispatch(getProductList())
  }, [dispatch]);
  // -- ----- --

  const cartItems = useSelector(selectCart);
  const products = useSelector(selectProducts);

  const cartList = getCartList(products, cartItems, 'code');
  const sumCart = cartList.reduce(function (sum, current) {
    return sum + current.price * current.quantity
  }, 0)


  const menuArray = ['Название', 'Цвет', 'Количество', 'Цена'];
  return (
    <>
      <Header />
      <Title text='Корзина' />

      <CartContainer>
        <CartMenu>
          {menuArray.map((item, index) => <p key={index}>{item}</p>)}
        </CartMenu>
        {
          cartList.map(item =>
            <CartItem
              {...item}
              value={item.quantity}
              key={item.code}
              cart='true'
            />
          )}
      </CartContainer>

      <CartTotalContainer>
        <CartTotalText>Всього у кошику {cartList.length} товари на суму {sumCart.toLocaleString()} грн</CartTotalText>
        <Button text="Оформити замовлення" color="green" />
      </CartTotalContainer>
    </>
  )
}

export const CartContainer = styled.div`
 max-width: 120rem;
 margin: 0 auto;
 text-align: center;
 `



const CartMenu = styled.div`
    background-color: #F5F5F5;
    grid-template-columns: 1fr 1fr 1fr 18%;
    padding: 0.7rem 1.1rem 0.8rem 7rem;

    @media ${device.mobile}{
    display: none;
    }
    
    @media ${device.tabletS}{
      display: grid;
      align-items: center;
    }

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
max-width: 120rem;
margin: 0 auto;
padding: 0.7rem 1rem;

@media ${device.mobile}{
  padding-top: 1rem;
  flex-wrap: wrap;
  text-align: center;
  flex-direction: row;
  justify-content: center;
}
  
@media ${device.tabletS}{
  justify-content: space-between;
}
`

const CartTotalText = styled.h4`
font-size: 1.5rem;
color: #000000;
`