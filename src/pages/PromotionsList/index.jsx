import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Header } from '../../commons/Header/Header';
import { PromoList } from '../../components/Promotions/PromoList';
import { getPromotions } from '../../store/promotions/middlware';
import { Footer } from '../../commons/Footer';
import { ScrollToTop } from '../../commons/ScrollToTop';

export const PromotionsPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPromotions())
  }, [dispatch])

  return (
    <>
      <Header />
      <ScrollToTop />
      <PromoList />
      <Footer />
    </>
  )
};