import React from 'react'
import { Title } from '../Title/Title'
import { useSelector } from 'react-redux'
import { selectProducts } from '../../store/products_draft/selectors'
import { ProductItem } from '../ProductItem'
import { ProductItemList } from '../../pages/Product/StyledProductPage'

export const TopRatedProductsList = () => {
  const allProducts = useSelector(selectProducts)
  const arrayOfTopRated = allProducts.filter(e => e.isTopRated === true);
  console.log(arrayOfTopRated)
  return (
    <>
      <Title text='Популярные товары' />
      <ProductItemList>
        {
          arrayOfTopRated.map((e, index) => (
            <ProductItem name={e.name} price={e.currentPrice} image={e.imageUrl[0]} key={index} route={e.route} id={e._id} product={e} />
          ))
        }
      </ProductItemList>
    </>
  )
}
