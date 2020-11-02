import React from 'react'

import { Link } from 'react-router-dom'

import { ROUTES } from '../../../../pages/navigation/routes'
import { Item, AccountName } from '../StyledAccountInfo'

import { icon } from '../icons'

export const HeaderAccount = () => {
  return (
    <Link to={ROUTES.ACCOUNT}>
      <Item>
        {icon.account}
        <AccountName>Name</AccountName>
      </Item>
    </Link>
  )
}

