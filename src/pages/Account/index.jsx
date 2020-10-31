import React from 'react';
import {Header} from '../../commons/Header/Header';
import {Footer} from "../../commons/Footer";
import styled from 'styled-components';



export const AccountPage = props => {
const { handleChange, checked } = props
  return (
    <CenteredDiv>
      <Header/>
      <h1>Account page</h1>
      <Footer/>
    </CenteredDiv>
  )
}
const CenteredDiv = styled.div`
  text-align: center;
`
