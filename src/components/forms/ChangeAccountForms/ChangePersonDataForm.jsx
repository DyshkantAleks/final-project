import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../Button';
import { closeModal } from '../../../store/modal/actions-creators';
import { updateCustomer } from '../../../store/customer/middlwares';
import { selectCustomer } from '../../../store/customer/slectors';
import {GlobalConfig} from '../../../GlobalConfig'
const { Option } = Select;

export const ChangePersonalDataForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    // dispatch(updateCustomer(values));
    // dispatch(closeModal());
    console.log(values)
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
          }
         
        ]}>
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
