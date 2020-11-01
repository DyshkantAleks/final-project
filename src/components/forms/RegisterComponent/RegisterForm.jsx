import React, { useEffect } from 'react';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../Button';
import { StyledForm } from '../LoginComponent/StyledLoginComponent';

import { ErrorsField } from '../Errors/ErrorsField';


const validationSchema = yup.object({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  email: yup.string().email('Invalid email address').required('Required'),
  password: yup
    .string()
    .required('No password provided')
    .min(6, 'Password is too short - should be 6 chars minimum')
    .required('Required'),
  confirmPassword: yup
    .string()
    .required('Confirm your password')
    .oneOf([yup.ref('password')], 'Password does not match'),
  telepfone: yup
    .number()
    .required('Required')
    .min(9),
  gender: yup.string(),
  registered: yup.boolean(),
});

export const RegisterForm = (props) => {
  const dispatch = useDispatch();
 
  const { handleSubmit } = props;

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    telephone: '',
    gender: '',
    avatar: '',
    registered: true,
  };

  const handleBlur = (input) => {
    const key = input.target.name;
    const value = input.target.value;
  };
  
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleSubmit(values)
        }}>
        {(props) => (
          <StyledForm>
            <Field
              name='firstName'
              autoComplete='off'
              type='text'
              placeholder={(props.errors.firstName) || 'введите имя'}
              onBlur={handleBlur}
            />
            <Field
              name='lastName'
              autoComplete='off'
              type='text'
              placeholder='введите фамилию'
              onBlur={handleBlur}
            />
            <div>
            </div>
            <Field
              name='email'
              autoComplete='off'
              type='email'
              placeholder={(props.errors.email) || 'введите email'}
              onBlur={handleBlur}
            />
            <div>
            </div>
            <Field
              name='password'
              type='password'
              autoComplete='off'
              placeholder={(props.errors.password) || 'введите пароль'}
              onBlur={handleBlur}
            />
            <Field
              name='confirmPassword'
              type='password'
              autoComplete='off'
              placeholder={(props.errors.confirmPassword) || 'подтвердите пароль'}
              onBlur={handleBlur}
            />
            <Field
              name='telephone'
              type='number'
              autoComplete='off'
              placeholder={(props.errors.telephone) || 'введите номер телефона'}
              onBlur={handleBlur}
            />
            <Field as='select' name='gender'>
              <option value='none'>Не выбран</option>
              <option value='male'>Мужской</option>
              <option value='female'>Женский</option>
            </Field>
            <Button type='submit' text='Регистрация' />
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};
