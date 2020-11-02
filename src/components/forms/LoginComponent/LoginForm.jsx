import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../Button';

export const LoginForm = props => {
 
  const {handleSubmit} = props
  const dispatch = useDispatch()

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
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Запомнить меня</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button text='Войти' type="submit"></Button>
        <span>Или</span> <a href="">register now!</a> 
      </Form.Item>
    </Form>
  );
};
