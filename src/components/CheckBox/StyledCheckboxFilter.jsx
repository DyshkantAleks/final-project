import styled from 'styled-components';
import { Checkbox } from 'antd';

export const Container = styled.div`
  margin: 20px;
`;

export const FilterName = styled.h3`
  font-size: 24px;
  text-align: left;
`;

export const Wrapper = styled.div`
  position: relative;
  margin-top: 15px;
  text-align: left;
`;

export const Popup = styled.div`
  display: none;
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  width: 170px;
  box-sizing: border-box;
  padding: 5px 12px;
  font-size: 11px;
  background-color: #007042;
  color: #fff;
  border-radius: 3px;
  &::before {
    content: '';
    position: absolute;
    left: -6.5px;
    top: 8px;
    display: inline-block;
    width: 13px;
    height: 13px;
    background: #007042;
    transform: rotate(-45deg);
  }
`;

export const Link = styled.a`
  margin-left: 10px;
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  & .ant-checkbox-checked::after {
    display: none;
  }
  & .ant-checkbox-inner::after {
    border: none;
  }
  & .ant-checkbox .ant-checkbox-inner {
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
    background-color: #007042;
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
  
  & .ant-checkbox-input:focus+.ant-checkbox-inner,
  &:hover .ant-checkbox-inner,
  & .ant-checkbox:hover .ant-checkbox-inner,
  & .ant-checkbox-checked .ant-checkbox-inner {
    border-color: #007042;
  }
`;