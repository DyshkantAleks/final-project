import React from 'react';
import {Header} from '../../commons/Header/Header';
import {AboutText} from "./AboutPageComponents/AboutText";


export const AboutPage = () => {
  return (
    <>
      <Header/>
      <h1>About page</h1>
      <AboutText/>
    </>
  )
}