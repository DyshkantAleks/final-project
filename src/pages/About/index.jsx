import React from 'react';
import {Header} from '../../commons/Header/Header';
import {AboutText} from "./AboutPageComponents/AboutText";
import { ContentContairer } from '../../components/Content/Content';

export const AboutPage = () => {
  return (
    <ContentContairer>
      <Header/>
      <h1>About page</h1>
      <AboutText/>
    </ContentContairer>
  )
}