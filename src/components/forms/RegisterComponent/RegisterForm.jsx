import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Form,
  Input,
  Tooltip,
  Select,
  AutoComplete,
} from 'antd';
import { Button } from '../../Button';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { Option } = Select;


export const RegisterForm = (props) => {
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
      name='register'
      form={form}
      onFinish={handleSubmit}
      initialValues={{
        prefix: '+380',
      }}
    >
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
        name='surname'
        label='Фамилия'
        rules={[
          {
            required: true,
            message: 'Введите фамилию!',
          },
          
        ]}>
        <Input />
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
        <Input />
      </Form.Item>

      <Form.Item
        name='password'
        label='Пароль'
        rules={[
          {
            required: true,
            message: 'Введите пароль!',
          },
          {
            min: 7,
            message: 'Минимум 7 символов!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name='confirm'
        label='Повторите пароль'
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Повторите пароль!',
          },
         
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('Пароли не совпадают!');
            },
          }),
        ]}>
        <Input.Password />
      </Form.Item>

      <Form.Item
        name='login'
        label={
          <span>
            Логин&nbsp;
            <Tooltip title='Вы можете авторизироваться с попощью логина'>
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Введите логин!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="gender" label="Ваш пол" >
        <Select
          placeholder="Выбирите из списка"
         
        >
          <Option value="male">М.</Option>
          <Option value="female">Ж.</Option>
          
        </Select>
      </Form.Item>
      <Form.Item
        name='phone'
        label='Телефон'
        rules={[{ required: true, message: 'Введите номер телефона!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>
     
      <Button text='Зарегистрироваться' type='submit'></Button>
    </Form>
  );
};
