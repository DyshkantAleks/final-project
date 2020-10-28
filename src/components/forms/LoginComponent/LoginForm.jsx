import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';


import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../Button';
import { StyledForm } from './StyledLoginComponent';
import { ErrorsField } from '../Errors/ErrorsField';


export const LoginForm = props => {
  const {handleSubmit} = props
  console.log(props, handleSubmit)
  const dispatch = useDispatch()

  const initialValues = {
    login: '',
    password: ''
  }

  const handleBlur = (input)=> {
    const key = input.target.name
    const value = input.target.value
  
}
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema ={ yup.object().shape({
          login: yup.string().required(),
          password: yup.string().min(7).required()
        })}
        onSubmit={(values) => {
          handleSubmit(values)
        }} >
        {(props) => (
          <StyledForm>
            <Field
              name="login"
              type="text"
              placeholder="login"
              onBlur={handleBlur}
            />
            <div>
              {props.errors.login && props.touched.login ? (
                <ErrorsField errorText={props.errors.login}/>
              ) : null}
            </div>
            <Field
              name="password"
              type="password"
              placeholder="password"
              onBlur={handleBlur}
            />
            {props.errors.password && props.touched.password ? (
              <ErrorsField errorText={props.errors.password}/>
            ) : null}
        
            <Button text='Войти' type="submit"></Button>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};
