import React from 'react'
import { Header } from '../../commons/Header/Header'
import { ContentContainer } from '../../styles/GeneralStyledComponents';
import { PopularCategoryList } from '../../components/PopularCategory/PopularCategoryList'
import { SliderMainPage } from '../../components/SliderMainPage/SliderMainPage'
import { Footer } from '../../commons/Footer'
import { TopRatedProductsList } from '../../components/TopRatedProducts/TopRatedProductsList'
import { ScrollToTop } from '../../components/ScrollToTop'

export const Homepage = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <ContentContainer>
        <SliderMainPage />
        <TopRatedProductsList />
        <PopularCategoryList />
      </ContentContainer>
      <Footer />
    </>
  )
}
