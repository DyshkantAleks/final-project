import React from 'react';
import styled from 'styled-components'
import { device } from '../../styles/breakpoints/breakpoints'
import { Header } from '../../commons/Header/Header';
import { ContactForm } from '../../components/forms/ContactForm/ContactForm';
import { OrderCart } from './OrderCart';
import { Title } from '../../components/Title/Title'
import { ContentContairer } from '../../styles/GeneralStyledComponents'
import { handleSubmit } from './SendNewOrder';

export const OrderPage = () => {

  return (
    <ContentContainer>
      <Header/>
      <Title text='Оформить заказ' />
      <ContainerPage>
        <ContactForm handleSubmit={handleSubmit}/>
        <OrderCart/>
      </ContainerPage>
    </ContentContainer>
  )
}

const ContainerPage = styled.div`
display: flex;
flex-direction: column;
@media${device.tabletM}{
justify-content: space-between;
flex-direction: row;
}
`
