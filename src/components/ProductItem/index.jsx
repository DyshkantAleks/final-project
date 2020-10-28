import React from 'react';

import { RegularIconFavorite } from './IconsSvg/RegularIconFavorite';
import { SolidIconFavorite } from './IconsSvg/SolidIconFavorite';
import { IconSale } from './IconsSvg/IconSale';
import { IconNew } from './IconsSvg/IconNew';
import { IconTopRated } from './IconsSvg/IconTopRated';
import { useToggle } from '../../utils/useToggle';
import { ConteinerItem, PhotoBox, Photo, TitleBox, NameContainer, Name, Price, StyledLink, ProductActivityContainer, PreviousPrice, PriceContainer, CurrentPrice, ButtonContainer } from './StyledProductItem';
import { Button } from '../Button';

export const ProductItem = (props) => {
  const { name, price, image, route, id, isNewProduct, isTopRated, isSale, previousPrice } = props

  const [inFavorite, toggleInFavorite] = useToggle();

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
            </ProductActivityContainer>
          )}
          {isNewProduct && (
            <ProductActivityContainer>
              <IconNew />
            </ProductActivityContainer>
          )}
          {isTopRated && (
            <ProductActivityContainer>
              <IconTopRated />
            </ProductActivityContainer>
          )}
        </PhotoBox>
        <TitleBox>
          <StyledLink to={`/products/${route}`}>
            <NameContainer>
              <Name>{name}</Name>
            </NameContainer>
          </StyledLink>
          {!inFavorite && <RegularIconFavorite onClick={() => toggleInFavorite(id)} />}
          {inFavorite && <SolidIconFavorite onClick={() => toggleInFavorite(id)} />}
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
              <Button text={'Купить'} />
            </ButtonContainer>
        </TitleBox>
      </ConteinerItem>
    </>
  )
};