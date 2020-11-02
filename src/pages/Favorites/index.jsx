import React, { useEffect } from 'react'
// import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux'
import { selectFavorites } from '../../store/favorites/selectors'
import { Header } from '../../commons/Header/Header'
// import { Button } from '../../components/Button';
import { Title } from '../../components/Title/Title'
import { CartContainer } from '../Cart/'
import { CartItem } from '../Cart/CartItem'
import { selectProducts } from '../../store/products_draft/selectors'
import { getProductList } from '../../store/products_draft/actions'
import { ContentContairer } from '../../components/Content/Content'

export const FavoritesPage = () => {
  const dispatch = useDispatch()
  // temporary
  useEffect(() => {
    dispatch(getProductList())
  }, [dispatch])

  const favorites = useSelector(selectFavorites)
  const products = useSelector(selectProducts)

  return (
    <ContentContairer>
      <Header />
      <Title text='Избранное' />
      <CartContainer>
        {favorites.map(item =>
          <CartItem
            {...item.product}
            cartQuantity={item.cartQuantity}
            key={item.id}
            fav='true'
          />
        )}
      </CartContainer>
    </ContentContairer>
  )
}
