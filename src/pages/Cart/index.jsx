import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectCart } from '../../store/cart/selectors';
import { Button } from '../../components/Button';
import { Header } from '../../commons/Header/Header';
import { Footer } from '../../commons/Footer';
import { Title } from '../../components/Title/Title';
import { device } from '../../styles/breakpoints/breakpoints';
import { CartItem } from '../Cart/CartItem';
import { ContentContairer } from '../../components/Content/Content';
import { ROUTES } from '../navigation/routes';

export const CartPage = () => {
  const cartItems = useSelector(selectCart)

  const sumCart = cartItems.reduce(function (sum, current) {
    return sum + current.product.currentPrice * current.cartQuantity
  }, 0)
  const sumQuantity = cartItems.reduce(function (sum, current) {
    return sum + current.cartQuantity
  }, 0)

  const menuArray = ['Название', 'Цвет', 'Количество', 'Цена'];
  return (
    <>
      <Header />
      <ContentContairer>
        <Title text='Корзина' />

        <CartContainer>
          <CartMenu>
            {/* {cartItems.length > 0 && menuArray.map((item, index) => <p key={index}>{item}</p>)}
          </CartMenu> */}
            {cartItems.length === 0 ? "В корзине нет товаров" :
               menuArray.map((item, index) => <p key={index}>{item}</p>) }
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
        {(cartItems.length > 0) &&
          <CartTotalContainer>
            {/* ASK ANDREW FOR TOTAL LEGNTH - {sumQuantity} or  {cartItems.length} ? */}
            <CartTotalText>Всего в корзине {sumQuantity} товаров на сумму {sumCart.toLocaleString()} грн</CartTotalText>
            <Link to={ROUTES.ORDER}><Button text='Оформить покупку' color='green' /></Link>
          </CartTotalContainer>}
      </ContentContairer>
      <Footer />
    </>
  )
}

export const CartContainer = styled.div`
max-width: 120rem;
margin: 0 auto;
text-align: center;
`;

export const CartMenu = styled.div`
background-color: #F5F5F5;

  @media ${device.mobile}{
    display: none;
  };
  @media ${device.tabletS}{
    grid-template-columns: 31% 1fr 27% 19%;
    padding: 0.7rem 1.1rem 0.7rem calc(3% + 7rem);
    display: ${props => (props.fav ? 'none' : 'grid')};
    align-items: center;
  };
  @media ${device.tabletM}{
  grid-template-columns: 32% 27% 18% 25%;
  padding: 0.7rem 0.8rem 0.7rem 14%;
  display: grid;
  }

  p {
    font-size: 1em;
    margin: 0;
    padding: 2rem;
    color: #007042;
    font-weight: bold;
  };
`;

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
    padding-top: 3rem;
  };
`;

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
`;
