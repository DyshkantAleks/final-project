import React, { useState } from 'react';
import { Checkbox } from 'antd';

import { LoginForm } from '../LoginComponent/LoginForm';
import { auth } from '../../store/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
// import { ErrorsField } from '../Errors/ErrorsField';
import { selectError } from '../../store/auth/selectors';
import { useHistory } from 'react-router';
import { closeModal } from '../../store/modal/actions';
import { RegisterForm } from '../RegisterComponent/RegisterForm';
import { registerCustomer } from '../../store/customer/operations';


export const LoginComponent = (props) => {
  const errorList = useSelector(selectError);
  const [errors, setErrors] = useState(errorList)
  const dispatch = useDispatch();
  const history = useHistory();
  const [registered, setRegistered] = useState(false);
  const logInHandler = (login, password) => {
    dispatch(auth(login, password, history));
    console.log(errors)
    if (errors.length === 0) {
      console.log(errors)
      dispatch(closeModal());
    }
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
          {(errors.length !== 0) && <ErrorsField errors={errors} />}
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
