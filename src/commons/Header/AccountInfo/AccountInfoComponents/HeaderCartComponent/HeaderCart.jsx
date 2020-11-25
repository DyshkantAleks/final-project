import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { Routes } from '../../../../../pages/Navigation/Routes';
import { selectCart } from '../../../../../store/cart/selectors';
import { icon } from '../../icons';
import { CartCounter, Item } from '../../StyledAccountInfo';

export const HeaderCart = () => {
  const cartItems = useSelector(selectCart);
  const sumQuantity = cartItems.reduce(function (sum, current) {
    return sum + current.cartQuantity
  }, 0);

  return (
    <Link to={Routes.CART}>
      <Item>
        {icon.cart}
        {sumQuantity > 0 && <CartCounter>{sumQuantity}</CartCounter>}
      </Item>
    </Link>
  )
}
