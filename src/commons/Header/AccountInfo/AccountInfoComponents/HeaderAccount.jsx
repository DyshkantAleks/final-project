import React from 'react'
import { Item, AccountName, AccountContainer } from '../StyledAccountInfo'
import { icon } from '../icons'

export const HeaderAccount = props => {
  const { clickHandler, customerName } = props
  return (
    <AccountContainer onClick={clickHandler}>
      {icon.account}
      <AccountName>{customerName}</AccountName>
    </AccountContainer>
  )
}
