import styled from 'styled-components';
import { Form } from 'formik'

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  input {
    margin: 10px;
    font-size: 18px;
  }
`;