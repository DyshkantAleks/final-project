import styled from 'styled-components';
import { Select } from 'antd';

export const StyledSelect = styled(Select)`
  margin-bottom: 20px;

  &:not(.ant-select-disabled):hover .ant-select-selector {
    border-color: #7191A6;
  }
`;