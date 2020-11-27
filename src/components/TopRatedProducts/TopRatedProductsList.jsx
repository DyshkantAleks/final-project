import React from 'react';
import { useSelector } from 'react-redux';

import { Title } from '../Title/Title';
import { selectProducts } from '../../store/products/selectors';
import { ProductItem } from '../ProductItem';
import { ProductItemList } from '../ProductItemDetails/StyledProductItemDetails';

export const TopRatedProductsList = () => {
  const allProducts = useSelector(selectProducts)
  const arrayOfTopRated = allProducts.filter(e => e.isTopRated === true)
  return (
    <>
      <Title text='Популярные товары' />
      <ProductItemList>
        {
          arrayOfTopRated.map((e, index) => (
            <ProductItem
              // name={e.name}
              // price={e.currentPrice}
              // image={e.imageUrl[0]}
              // route={e.route}
              // id={e._id}
              key={index}
              product={e}
            />
          ))
        }
      </ProductItemList>
    </>
  )
};