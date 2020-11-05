import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { selectCart } from '../../store/cart/selectors'
import { Button } from '../../components/Button'
import { Header } from '../../commons/Header/Header'
import { Title } from '../../components/Title/Title'
import { device } from '../../styles/breakpoints/breakpoints'
import { CartItem } from '../Cart/CartItem'
import { ContentContairer } from '../../components/Content/Content'

// тимчасово
import { Link } from 'react-router-dom'
import { ROUTES } from '../navigation/routes';

import { getCart } from '../../store/cart/middlware'
// тимчасово

export const CartPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const cartItems = useSelector(selectCart)

  const sumCart = cartItems.reduce(function (sum, current) {
    return sum + current.product.currentPrice * current.cartQuantity
  }, 0)
  const sumQuantity = cartItems.reduce(function (sum, current) {
    return sum + current.cartQuantity
  }, 0)

  const menuArray = ['Название', 'Цвет', 'Количество', 'Цена'];
  return (
    <ContentContairer>
      <Header />
      <Title text='Корзина' />

      <CartContainer>
        <CartMenu>
          {menuArray.map((item, index) => <p key={index}>{item}</p>)}
        </CartMenu>
        {
          cartItems.map(item =>
            <CartItem
              {...item.product}
              cartQuantity={item.cartQuantity}
              key={item.product._id}
            />
          )
        }
      </CartContainer>

      <CartTotalContainer>
        <CartTotalText>Всего в корзине {sumQuantity} товаров на сумму {sumCart.toLocaleString()} грн</CartTotalText>
        <Button text="Оформить покупку" color="green" />
      </CartTotalContainer>
    </ContentContairer>
  )
}

export const CartContainer = styled.div`
max-width: 120rem;
margin: 0 auto;
text-align: center;
`

export const CartMenu = styled.div`
background-color: #F5F5F5;//
grid-template-columns: 20% 15% 18% 1fr;
padding: 0.7rem 1.1rem 0.8rem 5rem;
  @media ${device.mobile}{
    display: none;
  };
  @media ${device.tabletS}{
    grid-template-columns: 25% 24% 28% 20%;
    padding: 0.7rem 1.1rem 0.8rem 8rem;
    display: grid;
    align-items: center;
  };
  @media ${device.tabletM}{
  grid-template-columns: 25% 23% 23% 1fr;
  padding: 0.7rem 1.1rem 0.8rem 14rem;
  }

  p {
    font-size: 14px;
    margin: 0;
    padding: 2rem;
    color: #007042;
    font-weight: bold;
  };
`

const CartTotalContainer = styled.div`
display: flex; 
max-width: 120rem;
margin: 0 auto;
  @media ${device.mobile}{
    padding-top: 1rem;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
  };
  @media ${device.tabletS}{
    padding-top: 3rem;
    flex-wrap: wrap;
    text-align: right;
    justify-content: flex-end;
  };
  @media ${device.tabletM}{
    justify-content: space-between;
    align-items: center;
  };
`

const CartTotalText = styled.h4`
font-size: 1.5rem;
color: #000000;
font-weight: bold;
  @media ${device.tabletS}{
    width: 100%;
  };
  @media ${device.tabletM}{
    width: inherit;
  };
`
