import React from 'react';

import {
  Form,
  Input,
  Tooltip,
  Select,

} from 'antd';
import { Button } from '../../components/Button/index';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { ValodationRules } from '../../validation/ValidationRules';

const { Option } = Select;
export const RegisterForm = (props) => {
  const {
    handleSubmit
  } = props;

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
        rules={ValodationRules.nameRules}>
        <Input/>
      </Form.Item>
      <Form.Item
        name='surname'
        label='Фамилия'
        rules={ValodationRules.surnameRules}>
        <Input />
      </Form.Item>
      <Form.Item
        name='email'
        label='E-mail'
        rules={ValodationRules.emailRules}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name='password'
        label='Пароль'
        rules={ValodationRules.passwordRules}
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
              // eslint-disable-next-line prefer-promise-reject-errors
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
        rules={ValodationRules.loginRules}
      >
        <Input />
      </Form.Item>
      <Form.Item name='gender' label='Ваш пол' >
        <Select
          placeholder='Выбирите из списка'

        >
          <Option value='male'>муж.</Option>
          <Option value='female'>жен.</Option>

        </Select>
      </Form.Item>
      <Form.Item
        name='phone'
        label='Телефон'
        rules={ValodationRules.phoneRules}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>

      <div style={{ textAlign: 'center' }}>
        <Button text='Зарегистрироваться' type='submit'></Button>
      </div>
    </Form>
  );
};
