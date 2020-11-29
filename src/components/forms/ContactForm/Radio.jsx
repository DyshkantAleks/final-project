import React from 'react';
import 'antd/dist/antd.css';
import { Radio } from 'antd';
import styled from 'styled-components';

export const RadioGroup = (props) => {
  const {title, radioProps = [] } = props;
  const radioList = radioProps.map(({ text, value }, index) => (
    <Radio style={radioStyle} key={index} value={value}>
      {text}
    </Radio>))
  console.log(radioList)
  return (
    <Radio.Group >
      <Text>{title}</Text>
      {radioList}
    </Radio.Group>
  );
};

const Text = styled.p`
  font-size: 1.4rem;
  line-height: 1.5;
`;

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
};
