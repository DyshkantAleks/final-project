import React, { useState } from 'react';
import { Checkbox } from 'antd';

import { LoginForm } from '../LoginComponent/LoginForm';
import { auth } from '../../store/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorsField } from '../Errors/ErrorsField';
import { closeModal } from '../../store/modal/actions';
import { RegisterForm } from '../RegisterComponent/RegisterForm';
import { getCustomer, registerCustomer } from '../../store/customer/operations';
import { setAuthError, setToken } from '../../store/auth/actions';

export const LoginComponent = (props) => {
  
  const [errors, setErrorAuthField] = useState('')
  const dispatch = useDispatch();
  
  const [registered, setRegistered] = useState(false);
  const logInHandler = (login, password) => {
    auth(login, password).then(response => {
      if (response.status === 200) {
        dispatch(setAuthError([]));
        dispatch(setToken(response.data.token));
        dispatch(getCustomer());
        dispatch(closeModal())
      }
    }).catch(val => setErrorAuthField((val.message)))
   
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
          {(errors) && <ErrorsField error={errors} />}
        </>
      )}

      {registered && (
        <RegisterForm
          handleSubmit={(values) => {
            dispatch(registerCustomer(values));
            setRegistered(true);
          }}
        />
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
