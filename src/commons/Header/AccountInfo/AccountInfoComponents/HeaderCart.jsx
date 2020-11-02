import React from 'react'

import { Link } from 'react-router-dom'
import { ROUTES } from '../../../../pages/navigation/routes'
import { icon } from '../icons'
import { Item } from '../StyledAccountInfo'

export const HeaderCart = () => {
  return (
    <Link to={ROUTES.CART}>
      <Item>
        {icon.cart}
      </Item>
    </Link>
  )
}
