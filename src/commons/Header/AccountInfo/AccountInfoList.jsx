import React from 'react'
import { HeaderAccount } from './AccountInfoComponents/HeaderAccount'
import { HeaderFavorites } from './AccountInfoComponents/HeaderFavorites'
import { HeaderCart } from './AccountInfoComponents/HeaderCart'

import { List } from './StyledAccountInfo'
import { useDispatch, useSelector } from 'react-redux'
import { selectCustomerIslogined, selectCustomer } from '../../../store/customer/slectors'
import { useHistory } from 'react-router'
import { ROUTES } from '../../../pages/navigation/routes'
import { Modal } from '../../../components/Modal'
import { closeModal, openModal } from '../../../store/modal/actions-creators'
import { LoginComponent } from '../../../components/forms/LoginComponent/LoginComponent'
import { selectModalIsOpen } from '../../../store/modal/selectors'

export const AccountInfoList = () => {
  const isLogined = useSelector(selectCustomerIslogined)
  const customerName = useSelector(selectCustomer).name
  const isOpenModal = useSelector(selectModalIsOpen)
  const history = useHistory()
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
      {isOpenModal && <Modal content={<LoginComponent/>} closeModalHandler={() => dispatch(closeModal())}/>}
      <HeaderAccount
        clickHandler={handler}
        customerName={customerName}/>
      <HeaderFavorites />
      <HeaderCart />
    </List>
  )
}
