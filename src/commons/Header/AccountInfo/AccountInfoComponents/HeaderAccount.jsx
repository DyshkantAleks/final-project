import React from 'react'

import { Link } from 'react-router-dom'

import { ROUTES } from '../../../../pages/navigation/routes'
import { Item, AccountName } from '../StyledAccountInfo'
import { icon } from '../icons'

export const HeaderAccount = props => {
  const { clickHandler, customerName } = props
  return (
    <Item onClick={clickHandler}>
      {icon.account}
      <AccountName>{customerName}</AccountName>
    </Item>
  )
}
