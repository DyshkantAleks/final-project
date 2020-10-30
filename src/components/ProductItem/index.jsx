import React from 'react';

import { RegularIconFavorite } from './IconsSvg/RegularIconFavorite';
import { SolidIconFavorite } from './IconsSvg/SolidIconFavorite';
import { IconSale } from './IconsSvg/IconSale';
import { IconNew } from './IconsSvg/IconNew';
import { IconTopRated } from './IconsSvg/IconTopRated';
import { useToggle } from '../../utils/useToggle';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import { ConteinerItem, PhotoBox, Photo, TitleBox, NameContainer, Name, Price, StyledLink, ProductActivityContainer } from './StyledProductItem';

export const ProductItem = (props) => {
  const { name, price, image, route, id, isNewProduct, isTopRated } = props

  const [inFavorite, toggleInFavorite] = useToggle();

  return (
    <div>
      <ConteinerItem key={id}>
        <PhotoBox>
          <StyledLink to={`/products/${route}`}>
            <Photo alt={name} src={image} />
          </StyledLink>
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
              <Name>{capitalizeFirstLetter(`${name}`)}</Name>
            </NameContainer>
          </StyledLink>
          {!inFavorite && <RegularIconFavorite onClick={() => toggleInFavorite(id)} />}
          {inFavorite && <SolidIconFavorite onClick={() => toggleInFavorite(id)} />}
          <Price>{price.toLocaleString()}</Price>
        </TitleBox>
      </ConteinerItem>
    </div>
  )
};