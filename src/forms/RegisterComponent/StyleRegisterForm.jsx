import styled from 'styled-components';
import { Form } from 'antd';

export const StyledForm = styled(Form)`
  .ant-input:hover:not(#register_password):not(#register_confirm),
  .ant-input-affix-wrapper:hover {
    border: 1px solid #7191A6;
  }

  .ant-form-item-has-error .ant-input-affix-wrapper:hover {
    border: 1px solid #ff4d4f;
  }

  .ant-select:not(.ant-select-disabled):hover .ant-select-selector{
    border-color: #7191A6;
  }
`;