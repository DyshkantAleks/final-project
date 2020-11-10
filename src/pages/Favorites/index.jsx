import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../store/favorites/selectors';
import { Header } from '../../commons/Header/Header';
import { Title } from '../../components/Title/Title';
import { CartContainer, CartMenu } from '../Cart/';
import { FavItem } from './FavItem';
import { ContentContairer } from '../../components/Content/Content';

export const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  const favMenuArray = ['Название', 'Цвет', 'Размеры', 'Корзина'];

  return (
    <ContentContairer>
      <Header />
      <Title text='Избранное' />
      <CartContainer>
        <CartMenu fav>
          {favMenuArray.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </CartMenu>
        {favorites.length === 0
          ? 'У вас нет избранных товаров'
          : favorites.map((item) => (
            <FavItem {...item} key={item._id} item={item} />
          ))}
      </CartContainer>
    </ContentContairer>
  );
};
