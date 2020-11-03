import React from 'react'
import { HeaderAccount } from './AccountInfoComponents/HeaderAccount'
import { HeaderFavorites } from './AccountInfoComponents/HeaderFavorites'
import { HeaderCart } from './AccountInfoComponents/HeaderCart'
import { Input } from 'antd'
import ReactDOM from 'react-dom'
import './style.scss'
import 'antd/dist/antd.css'
import { List } from './StyledAccountInfo'
import { useHistory } from 'react-router-dom'
import useWindowDimensions from '../../../utils/useWindowDimensions'

export const AccountInfoList = () => {
  const { screenWidth } = useWindowDimensions()
  const history = useHistory()

  const { Search } = Input
  const onSearch = value => {
    if (value === '') {
      return
    }
    history.push(`/search?query=${value}`)
  }
  return (
    <List>
      {screenWidth >= 1200 && (
        <Search enterbutton='true' onSearch={onSearch} placeholder='Найти товар по названию' />
      )}
      <HeaderAccount />
      <HeaderFavorites />
      <HeaderCart />
    </List>
  )
}
