import React from 'react';

import { Header } from '../../commons/Header/Header';
import { ProductItemDetails } from '../../components/ProductItemDetails';
import { ContentContairer } from '../../components/Content/Content';

export const ProductPage = () => {
  return (
    <>
      <Header />
      <ContentContairer>
        <ProductItemDetails />
      </ContentContairer>
    </>
  )
}