import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites, selectLoader } from '../../store/favorites/selectors';
import { Header } from '../../commons/Header/Header';
import { Title } from '../../components/Title/Title';
import { CartContainer, CartMenu } from '../Cart'
import { FavItem } from './FavItem';
import { ContentContairer } from '../../components/Content/Content';
import { Footer } from '../../commons/Footer';
import { Loader } from '../../components/Loader/';

export const FavoritesPage = () => {

  const favorites = useSelector(selectFavorites);
  const favLoader = useSelector(selectLoader);
  
  const favMenuArray = ['Название', 'Цвет', 'Размеры', 'Корзина'];


  return (
    <>
      { favLoader ? <Loader /> :
        <ContentContairer>
          <Header />
          <Title text='Избранное' />
          <CartContainer>
            <CartMenu fav>
              {(favorites.length > 0) && favMenuArray.map((item, index) => <p key={index}>{item}</p>)}
            </CartMenu>
            {favorites.length === 0 ? "У вас нет избранных товаров" : favorites.map(item =>
              <FavItem
                {...item}
                key={item._id}
                item={item}
              />
            )}
          </CartContainer>
        </ContentContairer>
      }
      <Footer />
    </>
  )
}
