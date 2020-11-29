import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { RegularIconFavorite } from './IconsSvg/RegularIconFavorite';
import { SolidIconFavorite } from './IconsSvg/SolidIconFavorite';
import { IconSale } from './IconsSvg/IconSale';
import { IconNew } from './IconsSvg/IconNew';
import { IconTopRated } from './IconsSvg/IconTopRated';
import { ContainerItem, PhotoBox, Photo, TitleBox, NameContainer, Name, Price, StyledLink, ProductActivityContainer, PreviousPrice, PriceContainer, CurrentPrice, ButtonContainer } from './StyledProductItem';
import { Button } from '../Button';
import { selectCart } from '../../store/cart/selectors';
import { addProductToCart } from '../../store/cart/operations';
import { addProductToFav, removeProductFromFav } from '../../store/favorites/operations';
import { selectFavorites } from '../../store/favorites/selectors';

export const ProductItem = (props) => {
  const { product } = props;
  const { name, currentPrice, route, _id, isNewProduct, isTopRated, isSale, previousPrice } = product;
  const image = product.imageUrl[0];
  const dispatch = useDispatch();

  const productInCart = useSelector(selectCart);

  const btnInCart = productInCart.map(itemCart => itemCart.product._id).some(itemId => itemId === _id);

  const btnHeandler = (item, quantity) => {
    dispatch(addProductToCart(item, quantity))
  }

  const productInFavorite = useSelector(selectFavorites);
  const inFavorite = productInFavorite.map(item => item._id).includes(_id);

  const addToFav = (product) => {
    dispatch(addProductToFav(product))
  }

  const removeFromFav = (product) => {
    dispatch(removeProductFromFav(product))
  }

  return (
    <ContainerItem key={_id}>
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
        {!inFavorite && <RegularIconFavorite onClick={() => addToFav(product)} />}
        {inFavorite && <SolidIconFavorite onClick={() => removeFromFav(_id)} />}
        {isSale &&
            <PriceContainer>
              <CurrentPrice>{currentPrice.toLocaleString()}</CurrentPrice>
              <PreviousPrice>{previousPrice.toLocaleString()}</PreviousPrice>
            </PriceContainer>}
        {!isSale &&
            <PriceContainer>
              <Price>{currentPrice.toLocaleString()}</Price>
            </PriceContainer>}
        <ButtonContainer>
          {btnInCart ? <Button disabled width={'13rem'} text={'В корзине'} />
            : <Button color={true} width={'13rem'} text={'Купить'} onClick={() => btnHeandler(product, 1)} />}
        </ButtonContainer>
      </TitleBox>
    </ContainerItem>
  )
};

ProductItem.propTypes = {
  product: PropTypes.object
};