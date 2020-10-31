import React from 'react'
import styled from 'styled-components'
import {Form} from 'formik'
import { Title } from '../../Title/Title'

export const CenteredTitle = styled(Title)`
  text-align: center;
`
export const StyledForm = styled(Form)`
display: flex;
flex-direction: column;

align-items: center;
justify-content: space-around;
margin: 0 auto;
font-family: inherit;

 div{
   color: red;
 }

input, select {
   font-size: 14px;
   padding:10px;
   margin: 10px;
  
    :focus{
     border-color: #afada7;
     outline: none;
     ::-webkit-input-placeholder{
      color: transparent
     }
     ::-moz-placeholder{
      color: transparent
     }
  }
  ::-webkit-input-placeholder, ::-moz-placeholder {
    font-size: 12px;
    padding: 1rem;
    color: C; 
    font-family: inherit;
  }
 
  

}
`;