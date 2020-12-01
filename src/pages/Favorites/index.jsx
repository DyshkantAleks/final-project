import React from 'react';
import { useSelector } from 'react-redux';

import { selectFavorites } from '../../store/favorites/selectors';
import { Title } from '../../components/Title/Title';
import { CartContainer, CartMenu, CartEmpty } from '../Cart/StyledCartItem';
import { FavItem } from './FavItem';
import { ContentContainer } from '../../styles/GeneralStyledComponents';

export const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  const favMenuArray = ['Название', 'Цвет', 'Размеры', 'Корзина'];

  const itemToBeInFavorite = favorites.map(item =>
    <FavItem
      {...item}
      key={item._id}
      item={item}
    />
  );

  return (
    <ContentContainer>
      <Title text='Избранное' />
      <CartContainer>
        { favorites.length === 0 ? <CartEmpty>У вас нет избранных товаров </CartEmpty>
          : <CartMenu fav> {favMenuArray.map((item, index) => <p key={index}>{item}</p>)}</CartMenu>
        }
        {itemToBeInFavorite}
      </CartContainer>
    </ContentContainer>
  )
}
