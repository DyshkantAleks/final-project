import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Select, Row, Col, AutoComplete } from 'antd';
import { Button } from '../../Button';
import { RadioGroup } from './Radio';
import styled from 'styled-components';
import { selectCustomer, selectCustomerIslogined } from '../../../store/customer/slectors';

const { Option } = Select;

export const ContactForm = (props) => {
  const { handleSubmit } = props;
  const dispatch = useDispatch();
  const logined = useSelector(selectCustomerIslogined)
  const customer = useSelector(selectCustomer)
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
  const deliveryMethod = [
    {
      text: 'Самовывоз',
      value: 'Self',
    },
    {
      text: 'Новая почта',
      value: 'Nova Poshta',
    },
    {
      text: 'УкрПочта',
      value: 'ukrPoshta',
    },
  ];
  const payMethod = [
    {
      text: 'Наличными при получении',
      value: 'cash',
    },
    {
      text: 'Кредитная карта',
      value: 'creditCard',
    },
  ];
  const {name, surname, email, phone} = customer
  const initialValues = logined ? {name, surname, email, phone, prefix: '+380' } : {prefix: '+380'}

  return (
    <Form
      layout='vertical'
      name='order'
      form={form}
      onFinish={handleSubmit}
      initialValues={initialValues}
    >
      <Text>Пожалуйста, заполните форму</Text>
      <Text>Выберите форму доставки и оплаты</Text>

      <Row gutter={10}>
        <Col span={12}>
          <Form.Item
            name='name'
            label='Имя'
            rules={[
              {
                required: true,
                message: 'Введите имя!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name='surname'
            label='Фамилия'
            rules={[
              {
                required: true,
                message: 'Введите фамилию!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={10}>
        <Col span={12}>
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
            <Input />
          </Form.Item>
        </Col >
        <Col span={12}>
          <Form.Item
            name='phone'
            label='Телефон'
            rules={[{ required: true, message: 'Введите номер телефона!' }]}
          >
            <Input addonBefore={prefixSelector} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={10}>
        <Col span={12}>
          <Form.Item
            name='city'
            label='Населенный пункт'
            rules={[
              {
                required: true,
                message: 'Заполните поле!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name='street'
            label='Улица'
            rules={[
              {
                required: true,
                message: 'Заполните поле!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={10}>
        <Col span={12}>
          <Form.Item
            name='house'
            label='Дом'
            rules={[
              {
                required: true,
                message: 'Заполните поле!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name='flat'
            label='Квартира'
            rules={[
              {
                
                message: 'Заполните поле!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <Form.Item>
            <RadioGroup title='Способ доставки' radioProps={deliveryMethod} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <RadioGroup title='Способ оплаты' radioProps={payMethod} />
          </Form.Item>
        </Col>
      </Row>
      <Button text='Подтвердить заказ' type='submit'></Button>
    </Form>
  );
};

const Text = styled.p`
  font-size: 1.4rem;
  line-height: 1.5;
`;
