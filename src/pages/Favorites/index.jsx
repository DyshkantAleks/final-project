import React, { useEffect } from 'react';
//import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../store/favorites/selectors';
import { Header } from '../../commons/Header/Header';
import { Title } from '../../components/Title/Title';
import { CartContainer } from '../Cart/'
import { FavItem } from './FavItem';
import { ContentContairer } from '../../components/Content/Content';
import { getFavorites } from '../../store/favorites/middlware';

export const FavoritesPage = () => {
 
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getFavorites())
    }, [dispatch]);

    const favorites = useSelector(selectFavorites);

  return (
    <ContentContairer>
      <Header />
      <Title text='Избранное' />
      <CartContainer>
        {!favorites ? "Пусто": favorites.map(item =>
          <FavItem
            {...item}
            key={item._id}
            item={item}
          />
        )}
      </CartContainer>
    </ContentContairer>
  )
}