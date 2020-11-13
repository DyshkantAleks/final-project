import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Input, Select, Row, Col, Radio } from 'antd';
import { Button } from '../../Button';
import styled from 'styled-components';
import {
  selectCustomer,
  selectCustomerIslogined,
} from '../../../store/customer/slectors';
import GlobalConfig from '../../../GlobalConfig';

export const ContactForm = (props) => {
  const { handleSubmit } = props;
  const customer = useSelector(selectCustomer);
  const [form] = Form.useForm();
  const [delivery, setdelivery] = useState(GlobalConfig.deliveryOptions[0].PICKUP.value);
  console.log(GlobalConfig.deliveryOptions[0].PICKUP.value);
  
  const { name, surname, email, phone } = customer;
  const isVisibleAdressField = delivery === GlobalConfig.deliveryOptions[0].PICKUP.value
  
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
      layout='vertical'
      name='order'
      form={form}
      onFinish={handleSubmit}
      initialValues={{
        name,
        surname,
        email,
        phone,
        prefix: '+380',
        delivery: GlobalConfig.deliveryOptions[0].PICKUP.value,
      }}
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
              {
                pattern: GlobalConfig.textFieldRegExp,
                message: 'Имя должно состоять из букв a-z, A-Z, а-я, А-Я!',
              },
              {
                min: 2,
                message: 'Имя должно содержать минимум 2 символа!',
              },
              {
                max: 25,
                message: 'Имя должно содержать максимум 25 символов!',
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
              {
                pattern: GlobalConfig.textFieldRegExp,
                message: 'Фамилия должна состоять из букв a-z, A-Z, а-я, А-Я!',
              },
              {
                min: 2,
                message: 'Фамилия должна содержать минимум 2 символа!',
              },
              {
                max: 25,
                message: 'Фамилия должна содержать максимум 25 символов!',
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
        </Col>
        <Col span={12}>
          <Form.Item
            name='phone'
            label='Телефон'
            rules={[
              { required: true, message: 'Введите номер телефона!' },
              {
                pattern: GlobalConfig.numberFieldRegExp,
                message: 'Введите правильный номер',
              },
            ]}
          >
            <Input addonBefore={prefixSelector} />
          </Form.Item>
        </Col>
      </Row>
      {!isVisibleAdressField && (
        <>
          <Row gutter={10}>
            <Col span={12}>
              <Form.Item
                name='city'
                label='Населенный пункт'
                rules={[
                  {
                    required: !isVisibleAdressField,
                    message: 'Заполните поле!',
                  },
                  {
                    pattern: GlobalConfig.textFieldRegExp,
                    message: 'заполните поле кирилицей',
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
                    required: !isVisibleAdressField,
                    message: 'Заполните поле!',
                  },
                  {
                    pattern: GlobalConfig.textFieldRegExp,
                    message: 'Заполните поле кирилицей',
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
                    required: !isVisibleAdressField,
                    message: 'Заполните поле!',
                  },
                  {
                    pattern: GlobalConfig.adressFieldRegExp,
                    message: 'Используйте цифры и буквы',
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
                  {
                    pattern: GlobalConfig.numberFieldRegExp,
                    message: 'Используйте цифры',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </>
      )}

      <Row>
        <Col span={12}>
          <Form.Item
            name='delivery'
            label='Способ доставки'
            rules={[{ message: 'Выбирите способ доставки!' }]}
          >
            <Radio.Group onChange={(val) => setdelivery(val.target.value)}>
              {GlobalConfig.deliveryOptions
                .reduce((acc, rec, index) => {
                  return acc.concat(Object.values(rec));
                }, [])
                .map(({ text, value }, index) => (
                  <Radio style={radioStyle} key={index} value={value}>
                    {text}
                  </Radio>
                ))}
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name='payMethod'
            label='Способ оплаты'
            rules={[{ message: 'Выбирите способ оплаты!' }]}
          >
            <Radio.Group>
              {GlobalConfig.paymentOptions
                .reduce((acc, rec, index) => {
                  return acc.concat(Object.values(rec));
                }, [])
                .map(({ text, value }, index) => (
                  <Radio style={radioStyle} key={index} value={value}>
                    {text}
                  </Radio>
                ))}
            </Radio.Group>
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
const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
};
