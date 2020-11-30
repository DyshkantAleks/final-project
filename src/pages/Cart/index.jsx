import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
  CartContainer,
  CartMenu,
  CartTotalContainer,
  CartTotalText,
  CartEmpty,
  CartButtonHolder
} from './StyledCartItem';

import { selectCart } from '../../store/cart/selectors';
import { Button } from '../../components/Button';
import { Title } from '../../components/Title/Title';
import { CartItem } from '../Cart/CartItem';
import { ContentContainer } from '../../styles/GeneralStyledComponents';
import { ROUTES } from '../Navigation/routes';

export const CartPage = () => {
  const history = useHistory();
  const cartItems = useSelector(selectCart)

  const sumCart = cartItems.reduce(function (sum, current) {
    return sum + current.product.currentPrice * current.cartQuantity
  }, 0)
  const sumQuantity = cartItems.reduce(function (sum, current) {
    return sum + current.cartQuantity
  }, 0)

  const menuArray = ['Название', 'Цвет', 'Количество', 'Цена'];
  return (
    <ContentContainer>
      <Title text='Корзина' />
      <CartContainer>
        {
          cartItems.length === 0 ? <CartEmpty>В корзине нет товаров</CartEmpty>
            : <CartMenu>
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
      {cartItems.length > 0 &&
          <CartTotalContainer>
            <CartTotalText>Всего в корзине {sumQuantity} товаров на сумму {sumCart.toLocaleString()} грн</CartTotalText>
            <CartButtonHolder>

              <Button text='Вернуться к покупкам' onClick={() => history.push('/catalog/all')} />
              
              <Link to={ROUTES.ORDER}><Button text='Оформить покупку' color='green' /></Link>

            </CartButtonHolder>
          </CartTotalContainer>}
    </ContentContainer>
  )
}
