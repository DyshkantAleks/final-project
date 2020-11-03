import React from 'react';
import {Header} from '../../commons/Header/Header';
import {ContactForm} from '../../components/forms/ContactForm/ContactForm';
import {OrderCart} from './OrderCart';
import { Title } from '../../components/Title/Title'


export const OrderPage = () => {
  return (
    <>
      <Header/>
      <Title text='Оформить заказ' />
      <OrderCart/>
      <ContactForm/>

    </>
    
  )
}


