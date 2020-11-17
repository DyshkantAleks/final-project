import React from 'react';
import 'antd/dist/antd.css';
import { Radio } from 'antd';

export const RadioGroup = () => {
  return (
    <Radio.Group onChange={this.onChange} value={this.state.value}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
  );
};
