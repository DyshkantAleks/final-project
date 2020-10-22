import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../Button';
import { FaceBookButton } from '../../Button/SocialButtons/faceBookButton/FaceBookButton';
import { GoogleButton } from '../../Button/SocialButtons/gogleButton/GoogleButton';


export const LoginForm = ({handleSubmit}) => {
  const dispatch = useDispatch()

  const initialValues = {
    login: '',
    password: ''
  }

  const handleBlur=(input)=>{
    const key = input.target.name
    const value = input.target.value
    
}
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema ={ yup.object().shape({
          login: yup.string().required(),
          password: yup.string().required().min(6)
        })}
        onSubmit={(values) => {
          handleSubmit(values)
        }}

      >
        {(props) => (
          <StyledForm>
            <Field
              name='login'
              autoComplete='off'
              type='text'
              placeholder='введите логин'
              onBlur={handleBlur}

            />
            <Field
              name='password'
              type='text'
              autoComplete='off'
              placeholder='введите пароль'
              onBlur={handleBlur}
            />
            <Button text='Войти' type='submit'/>
            <div>
              <FaceBookButton text='Войти с помощью FaceBook'/>
              <GoogleButton text='Войти с помощью Google'/>
            </div>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  input {
    margin: 10px;
    font-size: 18px;
  }
`;