import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { PromoList } from '../../components/Promotions/PromoList';
import { getPromotions } from '../../store/promotions/operations';

export const PromotionsPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPromotions())
  }, [dispatch])

  return (
    <PromoList />
  )
};