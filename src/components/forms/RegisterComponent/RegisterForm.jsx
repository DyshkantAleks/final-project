import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../Button';

export const RegisterForm = (props) => {
  const dispatch = useDispatch();
 
  const { handleSubmit } = props;

  const initialValues = {
    firstName: '',
    lastName: '',
    login: '',
    email: '',
    password: '',
    confirmPassword: '',
    telephone: '+380',
    gender: '',
    avatar: '',
    registered: true,
  };  
  return (
   <h1>dasda</h1>
  );
};
