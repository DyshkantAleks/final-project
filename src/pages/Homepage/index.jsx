import React from 'react';
import {Header} from '../../commons/Header/Header';
import {ContentContairer} from '../../components/Content/Content';
import {TopRatedProductsList} from '../../components/TopRatedProducts/TopRatedProductsList';
import {PopularCategoryList} from '../../components/PopularCategory/PopularCategoryList';
import {SliderMainPage} from "../../components/SliderMainPage/SliderMainPage";
import { Footer } from '../../commons/Footer';

export const Homepage = () => {
  return (
    <>
      <Header/>
      <ContentContairer>
        <h1>Home page</h1>
        <SliderMainPage/>
        <TopRatedProductsList/>
        <PopularCategoryList/>
      </ContentContairer>
      <Footer/>
    </>
  )
}