import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Header } from '../../commons/Header/Header';
import { PromoList } from '../../components/Promotions/PromoList';
import { getPromotions } from '../../store/AppData/promotions/middlware';
import { Footer } from '../../commons/Footer';

export const PromotionsPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPromotions())
  }, [dispatch])

  return (
    <>
      <Header />
      <PromoList />
      <Footer />
    </>
  )
};