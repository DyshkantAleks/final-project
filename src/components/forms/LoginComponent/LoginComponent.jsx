import React, { useState } from 'react'
import { Checkbox } from 'antd';

import {LoginForm} from '../LoginComponent/LoginForm'
import { auth } from '../../../store/auth/middlware';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorsField } from '../Errors/ErrorsField';
import { selectError } from '../../../store/auth/selectors';
import { useHistory } from 'react-router';
import { closeModal } from '../../../store/modal/actions-creators';
import { RegisterForm } from '../RegisterComponent/RegisterForm';
import { registerCustomer } from '../../../store/customer/middlwares';

export const LoginComponent = props => {
  const dispatch = useDispatch()
  const error = useSelector(selectError)
  const history = useHistory()
  const [registered, setRegistered] = useState(false)
  const logInHandler = (login, password) =>{
    
    dispatch(auth(login, password, history))
    console.log(error)
    if (!error) { dispatch(closeModal()) }
  }
  
  return (
  
    <div>
      {!registered && <LoginForm handleSubmit={({login, password}) => logInHandler(login, password)}/>}
      {registered && <RegisterForm handleSubmit={(values) => {
        dispatch(registerCustomer(values))
        setRegistered(true)
      }
      }/>}
      
      {error && <ErrorsField errorText='Неверные даные!'/>}
      <Checkbox checked={registered} onClick={() => setRegistered((val) => !val)}>Я новый пользователь</Checkbox>
    </div>
  )
}