import styled from 'styled-components';
import { Checkbox } from 'antd';

export const Container = styled.div`
  margin: 20px;
`;

export const StyledCheckbox = styled(Checkbox)`
  line-height: 5rem;

  &+.ant-checkbox-wrapper {
  margin: 0;
}

  & .ant-checkbox-checked::after {
    display: none;
  }
  & .ant-checkbox-inner::after {
    border: none;
  }
  & .ant-checkbox .ant-checkbox-inner, 
  .ant-checkbox-input:focus+.ant-checkbox-inner {
    border-color: #A0A9AF;
  }
  & .ant-checkbox-checked .ant-checkbox-inner::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 20%;
    background-color: #7191A6;
    content: ' ';
  }
  & .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #fff;
  }
  & .ant-checkbox+span {
    font-size: 14px;
    color: #000;
  }
  & .ant-checkbox-inner {
    border: 1px solid #A0A9AF;
  }
  
  &:hover .ant-checkbox-inner,
  & .ant-checkbox:hover .ant-checkbox-inner,
  & .ant-checkbox-checked .ant-checkbox-inner {
    border-color: #7191A6;
  }
`;