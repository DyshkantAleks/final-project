import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../pages/Navigation/routes';
import { List, Item } from '../InfoLinks/StyledInfoLinks';

export const InfoLinks = () => {
  return (
    <List>
      <Item>
        <Link to={ROUTES.STORES}>Наш шоу-рум</Link>
      </Item>
      <Item>
        <Link to={ROUTES.PROMOTIONS}>Акции</Link>
      </Item>
      <Item>
        <Link to={ROUTES.ABOUT}>О нас</Link>
      </Item>
    </List>
  )
}
