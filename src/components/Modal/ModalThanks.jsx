import React from 'react';
import styled from 'styled-components';

import { Button } from '../Button'

const Header = styled.h4`
      color: #007042;
      font-weight:bold;
      width: 300px;
      text-align: center;
      margin: 0 0 10px 0;

`
const Text = styled.p`
     width: 300px;
     text-align: center;
     margin: 0;
     font-size: 16px;
     
`
const order = '№3265897'

export const ModalThanks = {
  closeButton: true,
  content:
        <>
          <Header>Дякуємо, що вибрали нас!</Header>
          <Text>Ваше замовлення {order} успішно оформлене. Чекайте на дзвінок від нашого фахівця.</Text>
        </>,
  actions: <Button text='ПРОДОВЖИТИ ПОКУПКИ' onClick={() => console.log('ky-ky')}/>
}
