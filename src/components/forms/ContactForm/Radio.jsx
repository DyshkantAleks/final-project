import React from 'react';
import 'antd/dist/antd.css';
import { Radio } from 'antd';
import { useState } from "react";
import styled from 'styled-components'

export const RadioGroup = (props) => {

  const [state, setState] = useState({
    value: 1,
  })

  const onChange = e => {
    // console.log('radio checked', e.target.value);
    setState({
      value: e.target.value,
    });
  };

    return (
      <Radio.Group onChange={onChange} value={state.value}>
        <Text>{props.title}</Text>
        <Radio style={radioStyle} value={1}>{props.b1}</Radio>
        <Radio style={radioStyle} value={2}>{props.b2}</Radio>
      </Radio.Group>
    );
}

const Text = styled.p`
font-size: 1.4rem;
line-height: 1.5;
`

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
};