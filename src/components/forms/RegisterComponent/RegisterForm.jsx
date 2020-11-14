import React from 'react';

import { Form, Input, Tooltip, Select } from 'antd';
import { Button } from '../../Button';
import { QuestionCircleOutlined } from '@ant-design/icons';
import GlobalConfig from '../../../GlobalConfig';

const { Option } = Select;
export const RegisterForm = (props) => {
  const { handleSubmit } = props;

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
      layout='vertical'
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
          {
            max: 30,
            message: 'Максимум 30 символов!',
          },
          {
            pattern: GlobalConfig.adressFieldRegExp,
            message: 'Пароль должен состоять из букв и цифр!',
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
            validator (rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('Пароли не совпадают!');
            },
          }),
        ]}
      >
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
          {
            min: 2,
            message: 'Логин должен содержать минимум 2 символа!',
          },
          {
            max: 15,
            message: 'Логин должен содержать максимум 25 символов!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name='gender' label='Ваш пол'>
        <Select placeholder='Выбирите из списка'>
          <Option value='male'>муж.</Option>
          <Option value='female'>жен.</Option>
        </Select>
      </Form.Item>
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
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>

      <div style={{ textAlign: 'center' }}>
        <Button text='Зарегистрироваться' type='submit'></Button>
      </div>
    </Form>
  );
};
