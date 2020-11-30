import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectCart } from '../../../../../store/cart/selectors';
import { ROUTES } from '../../../../../pages/Navigation/routes';
import { icon } from '../../icons';
import { CartCounter, Item } from '../../StyledAccountInfo';

export const HeaderCart = () => {
  const cartItems = useSelector(selectCart);
  const sumQuantity = cartItems.reduce(function (sum, current) {
    return sum + current.cartQuantity
  }, 0);

  return (
    <Link to={ROUTES.CART}>
      <Item>
        {icon.cart}
        {sumQuantity > 0 && <CartCounter>{sumQuantity}</CartCounter>}
      </Item>
    </Link>
  )
};