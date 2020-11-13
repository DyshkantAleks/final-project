import React from 'react';
import styled from 'styled-components'
import { device } from '../../styles/breakpoints/breakpoints'
import {Header} from '../../commons/Header/Header';
import {ContactForm} from '../../components/forms/ContactForm/ContactForm';
import {OrderCart} from './OrderCart';
import { Title } from '../../components/Title/Title'
import { ContentContairer } from '../../components/Content/Content'
import { server } from '../../API'

export const OrderPage = () => {
  const handleSubmit = (values) => {

    const myOrder = {
      deliveryAddress: {
        city: values.city,
        address: values.street + " " + values.house,
      },
      email: values.email,
      mobile: values.phone,
      letterSubject: "Thank you for order! You are welcome!",
      letterHtml:
          "<h1>Your order is placed. OrderNo is ...</h1><p>{Other details about order in your HTML}</p>"
    };
    console.log(myOrder)

    const createNewOrder = (newOrder) => async (dispatch) => {
      try {
        console.log(newOrder)
        const {status, data} = await server.post('/orders', JSON.stringify(newOrder))
        if (status === 200) {
        console.log("status === 200")
        console.log(status, data)
        }
          } 
      catch (error) {
        }
    }
    createNewOrder(myOrder)();
  }

  
  return (
    <ContentContairer>
      <Header/>
      <Title text='Оформить заказ' />
      <ContainerPage>
        <ContactForm handleSubmit={handleSubmit}/>
        <OrderCart/>
      </ContainerPage>
    </ContentContairer>
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