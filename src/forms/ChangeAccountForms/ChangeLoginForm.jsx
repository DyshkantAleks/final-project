import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { QuestionCircleOutlined } from '@ant-design/icons';

import { closeModal } from '../../store/modal/actions';
import { updateCustomer } from '../../store/customer/operations';
import { selectCustomer } from '../../store/customer/slectors';
import { ValodationRules } from '../../validation/ValidationRules';
import { Button } from '../../components/Button';

export const ChangeLoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(updateCustomer(values));
    dispatch(closeModal());
  };
  const customer = useSelector(selectCustomer);
  const initialValues = customer;

  return (
    <Form
      name='change_contacts'
      className='login-form'
      initialValues={initialValues}
      onFinish={handleSubmit}
    >
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
      <Form.Item>
        <Button text='Отмена' onClick={() => dispatch(closeModal())}/>
        <Button text='Изменить' type='submit'/>
      </Form.Item>
    </Form>
  );
};