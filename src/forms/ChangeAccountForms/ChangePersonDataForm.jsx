import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../components/Button';
import { closeModal } from '../../store/modal/actions-creators';
import { updateCustomer } from '../../store/customer/middlwares';
import { selectCustomer } from '../../store/customer/slectors';
import {GlobalConfig} from '../../GlobalConfig'
import { ValodationRules } from '../../validation/ValidationRules';
const { Option } = Select;

export const ChangePersonalDataForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(updateCustomer(values));
    dispatch(closeModal());
  };
  const customer = useSelector(selectCustomer);
  const initialValues = customer;

  return (
    <Form
      name='change_persinal'
      className='login-form'
      initialValues={initialValues}
      onFinish={handleSubmit}
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
      <Form.Item name='gender' label='Ваш пол' >
        <Select
          placeholder='Выбирите из списка'
         
        >
          <Option value='male'>муж.</Option>
          <Option value='female'>жен.</Option>
          
        </Select>
      </Form.Item>
      <Form.Item>
        <Button text='Отмена' onClick={() => dispatch(closeModal())}/>
        <Button text='Изменить' type='submit'/>
      </Form.Item>
    </Form>
  );
};
