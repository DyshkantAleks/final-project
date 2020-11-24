import React from 'react';
import { useSelector } from 'react-redux';

import { Title } from '../Title/Title';
import { selectProducts } from '../../store/products/selectors';
import { ProductItem } from '../ProductItem';
import { ProductItemList } from '../../pages/Product/StyledProductPage';

export const NewProductsList = () => {
  const allProducts = useSelector(selectProducts);
  const arrayOfNew = allProducts.filter(e => e.isNewProduct === true);

  return (
    <>
      <Title text='Новые товары' />
      <ProductItemList>
        {
          arrayOfNew.map((e, index) => (
            <ProductItem key={index} product={e}/>
          ))
        }
      </ProductItemList>
    </>
  )
};