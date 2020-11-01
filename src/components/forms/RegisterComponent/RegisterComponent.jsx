import React from 'react'
import { RegisterForm } from './RegisterForm'

export const RegisterComponent = props =>{

  return (
    <RegisterForm handleSubmit={val => console.log(val)}/>
  )
}