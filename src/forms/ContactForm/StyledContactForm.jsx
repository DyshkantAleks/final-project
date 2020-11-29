import styled from 'styled-components';
import { Input, Radio } from 'antd';

export const Text = styled.p`
  font-size: 1.4rem;
  line-height: 1.5;
`;

export const StyledRadio = styled(Radio)`
  display: block;
  height: 3rem;
  lineHeight: 3rem;
  .ant-radio:hover .ant-radio-inner,
  .ant-radio-checked .ant-radio-inner,
  .ant-radio-checked {
      border-color: #7191a6;
  }
  .ant-radio-checked .ant-radio-inner::after {
    background-color: #7191a6;
  }
`;

export const StyledInput = styled(Input)`
  &:hover,
  #order_phone:hover {
    border-color: #7191a6;
  }
`;