import React from 'react';
import {Header} from '../../commons/Header/Header';
import { ContentContairer } from '../../components/Content/Content';
import { LoginComponent } from '../../components/forms/LoginComponent/LoginComponent';
import { Title } from '../../components/Title/Title';
import {GoogleButton} from '../../components/Button/SocialButtons/gogleButton/GoogleButton'
import styled from 'styled-components';
import Switch from "react-switch";


export const AccountPage = props => {
const { handleChange, checked } = props
  return (
    <CenteredDiv>
      <Header/>
      <ContentContairer>
        <Title/>
        <LoginComponent/>
        <label>
          <p>Я новый пользователь</p>
          <Switch onChange={handleChange} checked={checked} />
        </label>
        <p>или</p>
        <GoogleButton buttonText='Войти с Google'/>
      </ContentContairer>
      
    </CenteredDiv>
  )
}
const CenteredDiv = styled.div`
  text-align: center;
`
