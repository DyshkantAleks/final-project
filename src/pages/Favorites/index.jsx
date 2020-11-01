import React from 'react';
//import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { selectFavorites } from '../../store/favorites/selectors';
import { Header } from '../../commons/Header/Header';
import { Title } from '../../components/Title/Title';
import { CartContainer } from '../Cart/'
import { CartItem } from '../Cart/CartItem';
import { ContentContairer } from '../../components/Content/Content';

export const FavoritesPage = () => {

  const favorites = useSelector(selectFavorites);
 

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