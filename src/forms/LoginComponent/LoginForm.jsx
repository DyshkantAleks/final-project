import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Button } from '../../components/Button/index';

export const LoginForm = props => {
  const {handleSubmit} = props

  const initialValues = {
    login: '',
    password: ''
  }

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={initialValues}
      onFinish={handleSubmit}
    >
      <Form.Item
        name="login"
        rules={[
          {
            required: true,
            message: 'Please input your login!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Login" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button text='Войти' type="submit"></Button>
      </Form.Item>
    </Form>
  );
};