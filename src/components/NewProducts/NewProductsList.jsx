import React from 'react'
import styled from 'styled-components'
import { Title } from '../Title/Title'

import { device } from '../../styles/breakpoints/breakpoints'
import { ProductItemList } from '../ProductItemDetails/StyledProductItemDetails'
import { useSelector } from 'react-redux'
import { selectProducts } from '../../store/products_draft/selectors'
import ProductItem from '../ProductItem'

export const NewProductsList = () => {
  const allProducts = useSelector(selectProducts)
  const arrayOfNew = allProducts.filter(e => e.isNew === true)
  return (
    <>
      <Title text='Новые товары' />
      <ProductItemList>
        {
          arrayOfNew.map((e) => (
            <ProductItem name={e.name} price={e.currentPrice} image={e.imageUrl[0]} key={e.id} route={e.route} id={e._id} />
          ))
        }
      </ProductItemList>
    </>
  )
}

export const List = styled.ul`
display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem 2rem;
    list-style: none;
    padding-left: 0;
    
    @media ${device.tabletM} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    }

`
