import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Form, Input, Tooltip, Select, AutoComplete} from 'antd';
import { Button } from '../../Button';

const { Option } = Select;


export const ContactForm = (props) => {
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
      name='order'
      form={form}
      onFinish={handleSubmit}
      initialValues={{
        prefix: '+380',
      }}
      style={style}
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
        <Input/>
      </Form.Item>


      <Form.Item
        name='phone'
        label='Телефон'
        rules={[{ required: true, message: 'Введите номер телефона!' }]}
      >
        <Input addonBefore={prefixSelector}/>
      </Form.Item>

     
      <Button text='Подтвердить заказ' type='submit'></Button>
    </Form>
  
  );
};

let style = {
  width: '45em',
  'margin-left': '5em'

};