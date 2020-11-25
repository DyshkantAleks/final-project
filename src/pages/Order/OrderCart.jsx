import React from 'react';
import styled from 'styled-components';
import { selectCart } from '../../store/cart/selectors';
import { CartItem } from './CartItem';
import { useSelector } from 'react-redux';
import { device } from '../../styles/breakpoints/breakpoints';

export const OrderCart = () => {
  const cartItems = useSelector(selectCart);
  
  const sumCart = cartItems.reduce(function (sum, current) {
    return sum + current.product.currentPrice * current.cartQuantity;
  }, 0);

  const menuArray = ['Название', 'Цвет', 'Количество', 'Цена'];

  return (
    <>
      <CartContainer>
        <CartMenu>
          {menuArray.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </CartMenu>
        {cartItems.map((item, index) => (
          <CartItem
            {...item.product}
            cartQuantity={item.cartQuantity}
            key={index}
            cart='true'
          />
        ))}
      </CartContainer>
      <CartTotalContainer>
        <CartTotalText>
          Всего в корзине {cartItems.length} товаров на сумму{' '}
          {sumCart.toLocaleString()} грн
        </CartTotalText>
      </CartTotalContainer>
    </>
  );
};

const CartContainer = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const CartMenu = styled.div`
  background-color: #f5f5f5;
  grid-template-columns: 1fr 1fr 1fr 18%;
  padding: 0.7rem 1.1rem 0.8rem 7rem;
  @media ${device.mobile} {
    display: none;
  }
  @media ${device.tabletS} {
    display: grid;
    align-items: center;
  }
  p {
    font-size: 14px;
    // padding: 0.8rem;
    color: #007042;
    font-weight: bold;
  }
`;

const CartTotalContainer = styled.div`
  padding-top: 2rem;
  display: flex;
  max-width: 60rem;
  margin: 0 auto;
`;

const CartTotalText = styled.h4`
  font-size: 1.5rem;
  color: #000000;
  @media ${device.tabletS} {
    width: 100%;
  }
  @media ${device.tabletM} {
    width: inherit;
  } ;
`;
