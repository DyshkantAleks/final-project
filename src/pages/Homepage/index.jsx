import React from 'react';
import {Header} from '../../commons/Header/Header';
import {ContentContairer} from '../../components/Content/Content';
import {PopularProductsList} from '../../components/PopularProdusts/PopularProductsList';
import {PopularCategoryList} from '../../components/PopularCategory/PopularCategoryList';
import {SliderTest} from '../../components/SliderMain/SliderMain';
import {SimpleSlider} from "../../components/SliderID/SliderID";

export const Homepage = () => {
  return (
    <>
      <Header/>
      <ContentContairer>
        <h1>Home page</h1>
        {/*<SliderTest/>*/}
        <SimpleSlider/>
        <PopularProductsList/>
        <PopularCategoryList/>
      </ContentContairer>
    </>
  )
}