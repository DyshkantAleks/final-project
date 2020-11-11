import React from 'react';
import styled from 'styled-components';
import { device } from '../../styles/breakpoints/breakpoints';
import { Header } from '../../commons/Header/Header';
import { ContactForm } from '../../components/forms/ContactForm/ContactForm';
import { OrderCart } from './OrderCart';
import { Title } from '../../components/Title/Title';
import { ContentContairer } from '../../components/Content/Content';

export const OrderPage = () => {
  const handleSubmit = (values) => {
    console.log(values)
  }
  return (
    <ContentContairer>
      <Header />
      <Title text='Оформить заказ' />
      <ContainerPage>
        <ContactForm />
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
