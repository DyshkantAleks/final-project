import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../../../pages/navigation/routes';
import { CartCounter, Item } from '../StyledAccountInfo';
import { icon } from '../icons';
import { selectFavorites } from '../../../../store/favorites/selectors';

export const HeaderFavorites = () => {
  const favItems = useSelector(selectFavorites);
  const favLength = favItems.length

  return (
    <Link to={ROUTES.FAVORITES}>
      <Item>
        {icon.heart}
        {favLength > 0 && <CartCounter>{favLength}</CartCounter>}
      </Item>
    </Link>

  )
}
