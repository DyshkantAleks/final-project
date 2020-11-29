import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCustomerIslogined, selectCustomer } from '../../../store/customer/slectors'
import { HeaderAccount } from './AccountInfoComponents/HeaderAccountComponent/HeaderAccount'
import { HeaderFavorites } from './AccountInfoComponents/HeaderFavoritesComponent/HeaderFavorites'
import { HeaderCart } from './AccountInfoComponents/HeaderCartComponent/HeaderCart'
import { Input } from 'antd'
import './style.scss'
import 'antd/dist/antd.css'
import { List } from './StyledAccountInfo'
import { useHistory } from 'react-router-dom'
import useWindowDimensions from '../../../utils/useWindowDimensions'
import { ROUTES } from '../../../pages/Navigation/routes'
import { Modal } from '../../../components/Modal'
import { openModal } from '../../../store/modal/actions'
import { LoginComponent } from '../../../components/forms/LoginComponent/LoginComponent'
import { selectModalIsOpen } from '../../../store/modal/selectors'

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
  const isLogined = useSelector(selectCustomerIslogined)
  const customerName = useSelector(selectCustomer).name
  const isOpenModal = useSelector(selectModalIsOpen)
  const dispatch = useDispatch()

  const handler = () => {
    if (isLogined) {
      history.push(ROUTES.ACCOUNT)
    } else {
      dispatch(openModal({
        content: <LoginComponent />,
        title: 'Вход'
      }))
    }
  }
  return (
    <List>
      {isOpenModal && <Modal />}

      {screenWidth >= 1200 && (
        <Search enterbutton='true' onSearch={onSearch} placeholder='Найти товар по названию' />
      )}
      <HeaderAccount
        clickHandler={handler}
        customerName={customerName}
      />
      <HeaderFavorites />
      <HeaderCart />
    </List>
  )
}
