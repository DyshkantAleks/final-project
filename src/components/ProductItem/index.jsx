import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RegularIconFavorite } from './IconsSvg/RegularIconFavorite';
import { SolidIconFavorite } from './IconsSvg/SolidIconFavorite';
import { IconSale } from './IconsSvg/IconSale';
import { IconNew } from './IconsSvg/IconNew';
import { IconTopRated } from './IconsSvg/IconTopRated';
// import { useToggle } from '../../utils/useToggle';
import { ConteinerItem, PhotoBox, Photo, TitleBox, NameContainer, Name, Price, StyledLink, ProductActivityContainer, PreviousPrice, PriceContainer, CurrentPrice, ButtonContainer } from './StyledProductItem';
import { Button } from '../Button';
import { selectCart } from '../../store/cart/selectors';
import { addProductToCart } from '../../store/cart/middlware';
import { addProductToFav, removeProductFromFav } from '../../store/favorites/middlware';
import { selectFavorites } from '../../store/favorites/selectors';

export const ProductItem = (props) => {
  const { name, price, image, route, id, isNewProduct, isTopRated, isSale, previousPrice, product } = props

  const dispatch = useDispatch();
  //const [inFavorite, toggleInFavorite] = useToggle();

  const productInCart = useSelector(selectCart);

  const btnInCart = productInCart.map(itemCart => itemCart.product._id).some(itemId => itemId === id);

  const btnHeandler = (product, quantity) => {
    dispatch(addProductToCart(product, quantity))
  }

  const productInFavorite = useSelector(selectFavorites);
  const inFavorite = productInFavorite.map(item => item._id).includes(id);

  const addToFav = (product) => {
    dispatch(addProductToFav(product))
  }

  const removeFromFav = (product) => {
    dispatch(removeProductFromFav(product))
  }

  return (
    <>
      <ConteinerItem key={id}>
        <PhotoBox>
          <StyledLink to={`/products/${route}`}>
            <Photo alt={name} src={image} />
          </StyledLink>
          {isSale && (
            <ProductActivityContainer>
              <IconSale />
            </ProductActivityContainer>)}
          {isNewProduct && (
            <ProductActivityContainer>
              <IconNew />
            </ProductActivityContainer>)}
          {isTopRated && (
            <ProductActivityContainer>
              <IconTopRated />
            </ProductActivityContainer>)}
        </PhotoBox>
        <TitleBox>
          <StyledLink to={`/products/${route}`}>
            <NameContainer>
              <Name>{name}</Name>
            </NameContainer>
          </StyledLink>
          {/* toggleInFavorite(id) */}
          {!inFavorite && <RegularIconFavorite onClick={() => addToFav(product)} />}
          {inFavorite && <SolidIconFavorite onClick={() => removeFromFav(id)} />}
          {isSale &&
            <PriceContainer>
              <CurrentPrice>{price.toLocaleString()}</CurrentPrice>
              <PreviousPrice>{previousPrice.toLocaleString()}</PreviousPrice>
            </PriceContainer>}
          {!isSale &&
            <PriceContainer>
              <Price>{price.toLocaleString()}</Price>
            </PriceContainer>}
          <ButtonContainer>
            {btnInCart ? <Button disabled width={'13rem'} text={'В корзине'} />
              : <Button color={'#7191A6'} width={'13rem'} text={'Купить'} onClick={() => btnHeandler(product, 1)} />}
          </ButtonContainer>
        </TitleBox>
      </ConteinerItem>
    </>
  )
};