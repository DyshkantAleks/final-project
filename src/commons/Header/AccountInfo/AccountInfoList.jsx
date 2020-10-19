import React from 'react';
import {HeaderAccount} from './AccountInfoComponents/HeaderAccount';
import {HeaderFavorites} from './AccountInfoComponents/HeaderFavorites';
import {HeaderCart} from './AccountInfoComponents/HeaderCart';

import {List} from './StyledAccountInfo';

export const AccountInfoList = () => {
  return (
    <List>
      <HeaderAccount/>
      <HeaderFavorites/>
      <HeaderCart/>
    </List>
  )
}