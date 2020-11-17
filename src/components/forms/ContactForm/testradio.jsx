import React from 'react'
import {
  Form,
 
  Radio,
  
  Button,
 
} from 'antd';
import { DeliveryRadioGroup } from './Radio';
export const Demo = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
 
 
  return (
    <Form
      name="validate_other"
      onFinish={onFinish}>
      <Form.Item name="radio-group" label="Radio.Group">
        <Radio.Group>
          <Radio value="a">item 1</Radio>
          <Radio value="b">item 2</Radio>
          <Radio value="c">item 3</Radio>
        </Radio.Group>
      </Form.Item>
    
      <Form.Item name="radio-group111" label="Ljcnfdrf">
        <DeliveryRadioGroup/>
      </Form.Item>
      <Form.Item
        name="radio-button"
        label="Radio.Button"
        rules={[{ required: true, message: 'Please pick an item!' }]}
      >
        <Radio.Group>
          <Radio.Button value="a">item 1</Radio.Button>
          <Radio.Button value="b">item 2</Radio.Button>
          <Radio.Button value="c">item 3</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};