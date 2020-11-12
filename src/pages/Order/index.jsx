import React from 'react';
import styled from 'styled-components';
import { device } from '../../styles/breakpoints/breakpoints';
import { Header } from '../../commons/Header/Header';
import { ContactForm } from '../../components/forms/ContactForm/ContactForm';
import { OrderCart } from './OrderCart';
import { Title } from '../../components/Title/Title';
import { ContentContairer } from '../../components/Content/Content';
import { createOrder } from '../../store/order/middlware';
import { useDispatch } from 'react-redux';

export const OrderPage = () => {
  const dispatch = useDispatch()
  const handleSubmit = (values) => {
  
    console.log(values)
    dispatch(createOrder())
  }
 
  return (
    <ContentContairer>
      <Header />
      <Title text='Оформить заказ' />
      <ContainerPage>
        <ContactForm handleSubmit={(val) => handleSubmit(val)}/>
        <OrderCart />
      </ContainerPage>
    </ContentContairer>
  );
};

const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tabletM} {
    justify-content: space-between;
    flex-direction: row;
  }
`;
