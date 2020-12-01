import React from 'react';

import { Item, AccountName } from '../StyledAccountInfo';
import { icon } from '../icons';

export const HeaderAccount = props => {
  const { clickHandler, customerName } = props
  return (
    <Item onClick={clickHandler}>
      {icon.account}
      <AccountName>{customerName}</AccountName>
    </Item>
  )
}
