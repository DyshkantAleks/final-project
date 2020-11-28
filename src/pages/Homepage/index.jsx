import React from 'react';

import { ContentContainer } from '../../styles/GeneralStyledComponents';
import { PopularCategoryList } from '../../components/PopularCategory/PopularCategoryList';
import { SliderMainPage } from '../../components/SliderMainPage/SliderMainPage';
import { TopRatedProductsList } from '../../components/TopRatedProducts/TopRatedProductsList';

export const Homepage = () => {
  return (
    <ContentContainer>
      <SliderMainPage />
      <TopRatedProductsList />
      <PopularCategoryList />
    </ContentContainer>
  )
}
