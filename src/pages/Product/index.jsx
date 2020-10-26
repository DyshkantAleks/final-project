import React from 'react';

import { Header } from '../../commons/Header/Header';
import ProductItemDetails from '../../components/ProductItemDetails';
import { ContentContairer } from '../../components/Content/Content';
import { ProductItemList } from '../../components/ProductItemDetails/StyledProductItemDetails';
import ProductItem from '../../components/ProductItem';

export const ProductPage = () => {
  return (
    <>
      <Header />
      <ContentContairer>
        <ProductItemDetails />
        <ProductItemList>
          <ProductItem />
        </ProductItemList>
      </ContentContairer>
    </>
  )
}