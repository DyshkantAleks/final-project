import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCustomerIslogined, selectCustomer } from '../../../store/customer/slectors'
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
import { ROUTES } from '../../../pages/navigation/routes'
import { Modal } from '../../../components/Modal'
import { closeModal, openModal } from '../../../store/modal/actions-creators'
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
  // eslint-disable-next-line no-unused-vars
  const isOpenModal = useSelector(selectModalIsOpen)
  const dispatch = useDispatch()

  const handler = () => {
    if (isLogined) {
      history.push(ROUTES.ACCOUNT)
    } else {
      dispatch(openModal())
    }
  }
  return (
    <List>
      {isOpenModal && <Modal content={<LoginComponent />} closeModalHandler={() => dispatch(closeModal())}/>}

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
