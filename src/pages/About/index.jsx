import React from 'react';
import {Header} from '../../commons/Header/Header';
import {AboutText} from "./AboutPageComponents/AboutText";
import {Footer} from "../../commons/Footer";
import { ContentContairer } from '../../components/Content/Content';


export const AboutPage = () => {
  return (
    <ContentContairer>
      <Header/>
      <AboutText/>
      <Footer/>
      </ContentContairer>
  )
}