import React from 'react';
import {Header} from '../../commons/Header/Header';
import {Footer} from "../../commons/Footer";
import styled from 'styled-components';
import { ContentContairer } from '../../components/Content/Content';
import { LoginComponent } from '../../components/forms/LoginComponent/LoginComponent';
import { RegisterComponent } from '../../components/forms/RegisterComponent/RegisterComponent';

export const AccountPage = props => {

  return (
    <ContentContairer>
      <Header/>
      <h1>Account page</h1>
      <LoginComponent/>
      <Footer/>
    </ContentContairer>
  )
}

