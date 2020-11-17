import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  CartContainer,
  CartMenu,
  CartTotalContainer,
  CartTotalText,
  CartEmpty
 } from './StyledCartItem';

import { selectCart } from '../../store/cart/selectors';
import { Button } from '../../components/Button';
import { Header } from '../../commons/Header/Header';
import { Footer } from '../../commons/Footer';
import { Title } from '../../components/Title/Title';
import { CartItem } from '../Cart/CartItem';
import { ContentContainer } from '../../styles/GeneralStyledComponents';
import { ROUTES } from '../navigation/routes';
import { ScrollToTop } from '../../components/ScrollToTop';

export const CartPage = () => {
  const cartItems = useSelector(selectCart);

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
      <ScrollToTop />
      <ContentContainer>
        <Title text='Корзина' />

        <CartContainer>
          {
            (cartItems.length === 0) ? <CartEmpty>В корзине нет товаров</CartEmpty> :
            <CartMenu>
               {menuArray.map((item, index) => <p key={index}>{item}</p>)} 
             </CartMenu>
           }
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
            <CartTotalText>Всего в корзине {sumQuantity} товаров на сумму {sumCart.toLocaleString()} грн</CartTotalText>
            <Link to={ROUTES.ORDER}><Button text='Оформить покупку' color='green' /></Link>
          </CartTotalContainer>}
      </ContentContainer>
      <Footer />
    </>
  )
}

