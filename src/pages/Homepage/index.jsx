import React from 'react';

import { ContentContainer } from '../../styles/GeneralStyledComponents';
import { PopularCategoryList } from '../../components/PopularCategory/PopularCategoryList';
import { SliderMainPage } from '../../components/SliderMainPage/SliderMainPage';
import { TopRatedProductsList } from '../../components/TopRatedProducts/TopRatedProductsList';
import { ScrollOnTop } from '../../components/ScrollOnTop';

export const Homepage = () => {
  return (
    <ContentContainer>
      <ScrollOnTop />
      <SliderMainPage />
      <TopRatedProductsList />
      <PopularCategoryList />
    </ContentContainer>
  )
};