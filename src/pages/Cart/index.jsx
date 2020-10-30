import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { selectCart } from '../../store/cart/selectors';
import { Button } from '../../components/Button'
import { Header } from '../../commons/Header/Header';
import { Title } from '../../components/Title/Title';
import { getProductList } from '../../store/products_draft/actions';
import { selectProducts } from '../../store/products_draft/selectors';
import { getCartList } from '../../utils/filters';
import { device } from '../../styles/breakpoints/breakpoints';
import { CartItem } from '../Cart/CartItem';
import { ContentContairer } from '../../components/Content/Content';

export const CartPage = () => {

  const cartItems = useSelector(selectCart);

  const sumCart = cartItems.reduce(function (sum, current) {
    return sum + current.product.currentPrice * current.cartQuantity
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
              key={item.id}
              cart='true'
            />
          )}
      </CartContainer>

      <CartTotalContainer>
        <CartTotalText>Всего в корзине {cartItems.length} товаров на сумму {sumCart.toLocaleString()} грн</CartTotalText>
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


@media ${device.mobile}{
  padding-top: 1rem;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  
}
  
@media ${device.tabletS}{
  flex-wrap: wrap;
  text-align: right;
  justify-content: flex-end;
}

@media ${device.tabletM}{
  justify-content: space-between;
}

`

const CartTotalText = styled.h4`
font-size: 1.5rem;
color: #000000;

@media ${device.tabletS}{
width: 100%;
}

@media ${device.tabletM}{
  width: inherit;
  }
`