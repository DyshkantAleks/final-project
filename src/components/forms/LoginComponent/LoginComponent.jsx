import React, { useState } from 'react';
import { Checkbox } from 'antd';

import { auth } from '../../../store/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectError } from '../../../store/auth/selectors';
import { useHistory } from 'react-router';
import { closeModal } from '../../../store/modal/actions';
import { registerCustomer } from '../../../store/customer/operations';
import { ErrorsField } from '../../../forms/Errors/ErrorsField';
import { LoginForm } from '../../../forms/LoginComponent/LoginForm';
import { RegisterForm } from '../../../forms/RegisterComponent/RegisterForm';
import { StyledCheckbox } from '../../CheckBox/StyledCheckboxFilter';

export const LoginComponent = props => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const history = useHistory();
  const [registered, setRegistered] = useState(false);
  const logInHandler = (login, password) => {
    dispatch(auth(login, password, history));
    if (error) { dispatch(closeModal()) }
  };

  return (
    <div>
      {!registered && <LoginForm handleSubmit={({ login, password }) => logInHandler(login, password)} />}
      {registered && <RegisterForm handleSubmit={(values) => {
        dispatch(registerCustomer(values))
        setRegistered(true)
      }
      } />}
      {error && <ErrorsField errorText='Неверные даные!' />}
      <StyledCheckbox checked={registered} onClick={() => setRegistered((val) => !val)}>Я новый пользователь</StyledCheckbox>
    </div>
  )
};