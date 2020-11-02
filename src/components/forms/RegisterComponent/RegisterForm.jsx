import React, { useEffect } from 'react'
import { Formik, Field } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from '../../Button';
import { StyledForm } from './StyleRegisterForm';
import { FaceBookButton } from '../../Button/SocialButtons/faceBookButton/FaceBookButton';
import { GoogleButton } from '../../Button/SocialButtons/gogleButton/GoogleButton';
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
  registered: yup.boolean()
})

export const RegisterForm = (props) => {
  const dispatch = useDispatch();
 
  const { handleSubmit } = props;

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    telepfone: '',
    gender: '',
    avatar: '',
    registered: true
  }

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
        }}
      >
        {(props) => (
          <StyledForm>
            <Field
              name='firstName'
              autoComplete='off'
              type='text'
              placeholder='введите имя'
              onBlur={handleBlur}
            />
            <div>
              {props.errors.firstName && props.touched.firstName ? (
                <ErrorsField errorText={props.errors.firstName}/>
              ) : null}
            </div>
            <Field
              name='lastName'
              autoComplete='off'
              type='text'
              placeholder='введите фамилию'
              onBlur={handleBlur}
            />
            <div>
              {props.errors.lastName && props.touched.lastName ? (
                <ErrorsField errorText={props.errors.lastName}/>
              ) : null}
            </div>
            <Field
              name='email'
              autoComplete='off'
              type='email'
              placeholder='введите email'
              onBlur={handleBlur}
            />
            <div>
              {props.errors.email && props.touched.email ? (
                <ErrorsField errorText={props.errors.email}/>
              ) : null}
            </div>
            <Field
              name='password'
              type='text'
              autoComplete='off'
              placeholder='введите пароль'
              onBlur={handleBlur}
            />
            <div>
              {props.errors.password && props.touched.password ? (
                <ErrorsField errorText={props.errors.password}/>
              ) : null}
            </div>
            <Field
              name='confirmPassword'
              type='text'
              autoComplete='off'
              placeholder='подтвердите пароль'
              onBlur={handleBlur}
            />
            <div>
              {props.errors.confirmPassword && props.touched.confirmPassword ? (
                <ErrorsField errorText={props.errors.confirmPassword}/>
              ) : null}
            </div>
            <Field as='select' name='gender'>
              <option value='none'>Не выбран</option>
              <option value='male'>Мужской</option>
              <option value='female'>Женский</option>
            </Field>
            <div>
              {props.errors.gender && props.touched.gender ? (
                <ErrorsField errorText={props.errors.gender}/>
              ) : null}
            </div>
            <Field
              name='telepfone'
              type='number'
              autoComplete='off'
              placeholder='введите номер телефона'
              onBlur={handleBlur}
            />
            <div>
              {props.errors.telepfone && props.touched.telepfone ? (
                <ErrorsField errorText={props.errors.telepfone}/>
              ) : null}
            </div>
      
            <Button type='submit' text='Регистрация' />
          </StyledForm>
        )}
      </Formik>
    </div>
  )
}
