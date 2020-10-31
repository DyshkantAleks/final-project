import React from 'react'

import { GoogleButton } from '../../Button/SocialButtons/gogleButton/GoogleButton';
import {LoginForm} from '../LoginComponent/LoginForm'
import { auth } from '../../../store/auth/middlware';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorsField } from '../Errors/ErrorsField';
import { selectError } from '../../../store/auth/selectors';
import { CenteredTitle } from './StyledLoginComponent';

export const LoginComponent = props =>{
  const dispatch = useDispatch()
  const error = useSelector(selectError)
  
  return (
    <div>
      <CenteredTitle text='Введите  логин и пароль'/>
      <LoginForm handleSubmit={({login, password}) => dispatch(auth(login, password))}/>
      {error && <ErrorsField errorText='Ошибка ввода. Повторите ввод данных!'/>}
     
    </div>
  )
}