import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../store/favorites/selectors';
import { Header } from '../../commons/Header/Header';
import { Button } from '../../components/Button';
import { Title } from '../../components/Title/Title';
import { CartContainer } from '../Cart/'
import { CartItem } from '../Cart/CartItem';
import { selectProducts } from '../../store/products_draft/selectors';
import { getProductList } from '../../store/products_draft/actions';
import { getFavList } from '../../utils/filters';

export const FavoritesPage = () => {
  const dispatch = useDispatch()
  // temporary
  useEffect(() => {
    dispatch(getProductList())
  }, []);

  const favorites = useSelector(selectFavorites);
  const products = useSelector(selectProducts);
  
  // const favList = getFavList(products, favorites);
  // console.log('favList', favList)

  return (
    <>
      <Header />
      <Title text='Обране' />
      <CartContainer>
        {favorites.map(item =>
          <CartItem
            {...item}
            key={item.code}
            fav='true'
          />
        )}
      </CartContainer>
      
    </>
  )
}