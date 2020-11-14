import React from 'react'
import { useDispatch } from 'react-redux'
import {registerCustomer} from '../../../store/Customer/customer/middlwares'

import { RegisterForm } from './RegisterForm'

export const RegisterComponent = props => {
  const dispatch = useDispatch()

  return (
    <div>
      <RegisterForm handleSubmit={values => dispatch(registerCustomer(values))}/>
      
    </div>
  )
}