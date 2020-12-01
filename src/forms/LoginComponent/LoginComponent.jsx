import React, { useState } from 'react';
import { Checkbox } from 'antd';

import { LoginForm } from '../LoginComponent/LoginForm';
import { auth } from '../../store/auth/operations';
import { useDispatch } from 'react-redux';
import { ErrorsField } from '../Errors/ErrorsField';
import { closeModal } from '../../store/modal/actions';
import { RegisterForm } from '../RegisterComponent/RegisterForm';
import { getCustomer, registerCustomer } from '../../store/customer/operations';
import { setAuthError, setToken } from '../../store/auth/actions';
import { setCustomer } from '../../store/customer/actions';

export const LoginComponent = (props) => {
  const dispatch = useDispatch();
  const [authErrors, setErrorAuthField] = useState('');
  const [registerErrors, setErrorRegisterField] = useState('');
  const [registered, setRegistered] = useState(false);

  const logInHandler = (login, password) => {
    auth(login, password)
      .then((response) => {
        if (response.status === 200) {
          dispatch(setAuthError([]));
          dispatch(setToken(response.data.token));
          dispatch(getCustomer());
          dispatch(closeModal());
        }
      })
      .catch((val) => setErrorAuthField(val.message));
  };

  const registerHanler = (data) => {
    registerCustomer(data)
      .then((responce) => {
        if (responce.status === 200) {
          dispatch(setCustomer(responce.data));
          dispatch(closeModal());
        }
      })
      .catch((val) => setErrorRegisterField(val.message));
  };

  return (
    <div>
      {!registered && (
        <>
          <LoginForm
            handleSubmit={({ login, password }) =>
              logInHandler(login, password)
            }
          />
          {authErrors && <ErrorsField error={authErrors} />}
        </>
      )}

      {registered && (
        <>
          <RegisterForm handleSubmit={(values) => registerHanler(values)} />
          {registerErrors && <ErrorsField error={registerErrors} />}
        </>
      )}

      <Checkbox
        checked={registered}
        onClick={() => setRegistered((val) => !val)}
      >
        Я новый пользователь
      </Checkbox>
    </div>
  );
};
