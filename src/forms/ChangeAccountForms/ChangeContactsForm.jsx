import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../components/Button';
import { closeModal } from '../../store/modal/actions';
import { updateCustomer } from '../../store/customer/operations';
import { selectCustomer } from '../../store/customer/slectors';
import { ValodationRules } from '../../validation/ValidationRules';

export const ChangeContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(updateCustomer(values));
    dispatch(closeModal());
  };
  const customer = useSelector(selectCustomer);
  const initialValues = customer;
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
      name='change_contacts'
      className='login-form'
      initialValues={initialValues}
      onFinish={handleSubmit}
    >
      <Form.Item
        name='email'
        label='E-mail'
        rules={ValodationRules.emailRules}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='phone'
        label='Телефон'
        rules={ValodationRules.phoneRules}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item>
        <Button text='Отмена' onClick={() => dispatch(closeModal())}/>
        <Button text='Изменить' type='submit'/>
      </Form.Item>
    </Form>
  );
};
