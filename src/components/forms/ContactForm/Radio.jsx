import React, { useState } from 'react';
import { useContext } from 'react'
import 'antd/dist/antd.css';
import { Radio } from 'antd';
import styled from 'styled-components';

export const RadioGroup = (props) => {
  const {title, radioProps = [] } = props;
  const radioList = radioProps.map(({ text, value }, index) => (
    <Radio style={radioStyle} key={index} value={value}>
      {text}
    </Radio>))

  const [state, setState] = useState({
    value: props.value
  })

  const onChange = e => {
    console.log(e.target.value);
    setState({
      value: e.target.value,
    });
  };

  return (
    <Radio.Group onChange={onChange} value={state.value}>
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
