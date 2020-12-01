import React, { useState } from 'react';
import { Checkbox } from 'antd';

import { GoogleButton } from '../../Button/SocialButtons/gogleButton/GoogleButton';
import {LoginForm} from '../LoginComponent/LoginForm'
import { auth } from '../../../store/auth/middlware';
import { useDispatch, useSelector } from 'react-redux';
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
  
  return (
    <div>
      {!registered && <LoginForm handleSubmit={({login, password}) => {
        dispatch(auth(login, password, history))
        dispatch(closeModal())
      }
      }/>}
      {registered && <RegisterForm handleSubmit={(values) => {
        dispatch(registerCustomer(values))
        setRegistered(true)
      }
      }/>}
      
      {error && <ErrorsField errorText='Ошибка ввода. Повторите ввод данных!'/>}
      <Checkbox checked={registered} onClick={() => setRegistered((val) => !val)}>Я новый пользователь</Checkbox>
    </div>
  )
};