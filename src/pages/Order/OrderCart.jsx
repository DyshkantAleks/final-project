import React from 'react';
import { selectCart } from '../../store/cart/selectors';
import { CartItem } from './CartItem';
import { useSelector } from 'react-redux';
import { CartContainer, OrderCartMenu, CartTotalContainer, CartTotalText, CartEmpty } from '../Cart/StyledCartItem';

export const OrderCart = () => {
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
      <CartContainer>
        {
          cartItems.length === 0 ? <CartEmpty>В корзине нет товаров</CartEmpty>
            : <OrderCartMenu>
              {menuArray.map((item, index) => <p key={index}>{item}</p>)}
            </OrderCartMenu>
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
          </CartTotalContainer>}
    </>
  );
};