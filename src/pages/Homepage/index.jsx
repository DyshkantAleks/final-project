import React from 'react'
import { Header } from '../../commons/Header/Header'
import { ContentContairer } from '../../components/Content/Content'
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
      <ContentContairer>
        <SliderMainPage />
        <TopRatedProductsList />
        <PopularCategoryList />
      </ContentContairer>
      <Footer />
    </>
  )
}
