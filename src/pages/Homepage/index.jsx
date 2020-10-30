import React from 'react';
import {Header} from '../../commons/Header/Header';
import {ContentContairer} from '../../components/Content/Content';
import {PopularCategoryList} from '../../components/PopularCategory/PopularCategoryList';
import {SliderMainPage} from "../../components/SliderMainPage/SliderMainPage";
import { Footer } from '../../commons/Footer';

export const Homepage = () => {
  return (
    <>
      <Header/>
      <ContentContairer>
        <SliderMainPage/>
        <PopularCategoryList/>
      </ContentContairer>
      <Footer/>
    </>
  )
}