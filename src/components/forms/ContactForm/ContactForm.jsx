import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Form, Input, Tooltip, Select, AutoComplete} from 'antd';
import { Button } from '../../Button';
import { RadioGroup } from './Radio';
import styled from 'styled-components'

const { Option } = Select;

export const ContactForm = (props) => {
  const {
    handleSubmit
  } = props;
  const dispatch = useDispatch();
  const [form] = Form.useForm();
 
  const prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <Select
        showArrow={false}
        style={{
          width: 76,
        }}
      />
    </Form.Item>
  );

  return (
    <Form
      name='order'
      form={form}
      onFinish={handleSubmit}
      initialValues={{
        prefix: '+380',
      }}
      style={{
        'margin-right': '1em',
        'margin-bottom': '1em'
      }}
      >
      <Text>Пожалуйста, заполните форму</Text>
      <Text>Выберите форму доставки и оплаты</Text>

      <Form.Item
        name='name'
        label='Имя'
        rules={[
          {
            required: true,
            message: 'Введите имя!',
          }
        ]}>
        <Input/>

      </Form.Item>

      <Form.Item
        name='email'
        label='E-mail'
        rules={[
          {
            type: 'email',
            message: 'Некоректный E-mail ',
          },
          {
            required: true,
            message: 'Введите  E-mail!',
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        name='phone'
        label='Телефон'
        rules={[{ required: true, message: 'Введите номер телефона!' }]}
      >
        <Input addonBefore={prefixSelector}/>
      </Form.Item>
      <RadioGroup title ="Способ доставки" b1 = "Курьером домой" b2 = "Самовывоз"/>
      <RadioGroup title ="Способ оплаты" b1 = "Банковской картой онлайн" b2 = "Наличными или картой при получении"/>
      <Button text='Подтвердить заказ' type='submit'></Button>
    </Form>
  );
};

const Text = styled.p`
font-size: 1.4rem;
line-height: 1.5;
`
