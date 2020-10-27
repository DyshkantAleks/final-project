import React from 'react'
import styled from 'styled-components'
import {Form} from 'formik'

export const StyledForm = styled(Form)`
display: flex;
flex-direction: column;
height: 130px;
align-items: center;
justify-content: space-between;
margin: 0 auto;
 div{
   color: red;
 }

input {
   font-size: 18px;
}
`;