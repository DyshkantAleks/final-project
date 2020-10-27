import React from 'react'

import { FaceBookButton } from '../../Button/SocialButtons/faceBookButton/FaceBookButton';
import { GoogleButton } from '../../Button/SocialButtons/gogleButton/GoogleButton';
import {LoginForm} from '../LoginComponent/LoginForm'
import { auth } from '../../../store/auth/middlware';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorsField } from '../Errors/ErrorsField';
import { selectError } from '../../../store/auth/selectors';

export const LoginComponent = props =>{
  const dispatch = useDispatch()
  const error = useSelector(selectError)
  
  return (
    <div>
      <LoginForm handleSubmit={({login, password}) => dispatch(auth(login, password))}/>
      {error && <ErrorsField errorText='Ошибка ввода. Повторите ввод данных!'/>}
     
    </div>
  )
}