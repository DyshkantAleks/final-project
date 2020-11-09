import React from 'react'
import './mobileMenu.scss'
import { slide as Menu } from 'react-burger-menu'
import { InfoLinks } from '../InfoLinks/InfoLinkList'
import useWindowDimensions from '../../../utils/useWindowDimensions'
import { CatalogList } from '../Catalog/CatalogList'
import { useHistory } from 'react-router'
import { Input } from 'antd'

export const MobileMenu = () => {
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
    <>
      {screenWidth < 1200 && (
        <Menu>
          <CatalogList />
          <Search enterbutton='true' onSearch={onSearch} placeholder='Найти товар по названию' />
          <InfoLinks />
        </Menu>

      )}
    </>
  )
}
