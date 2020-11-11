import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Radio } from 'antd';


export const RadioGroup = (props) => {
  const { radioProps = [] } = props;
  const [value, setValue] = useState(null)
  useEffect(() => {
    setValue(value)
  }, [value])
  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value)
  };
 
  return (
    <Radio.Group
      value={value}
      onChange={(e) => onChange(e)}>
      {radioProps.map(({ text, value }, index) => (
        <Radio style={radioStyle} key={index} value={value}>
          {text}
        </Radio>))}
    </Radio.Group>
  );
};

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
};
