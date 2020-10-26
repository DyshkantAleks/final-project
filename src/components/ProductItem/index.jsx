import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { withRouter } from 'react-router-dom';

import { RegularIconFavorite } from './IconsSvg/RegularIconFavorite';
import { SolidIconFavorite } from './IconsSvg/SolidIconFavorite';
import { IconSale } from './IconsSvg/IconSale';
// import { IconNew } from './IconsSvg/IconNew';
// import { IconTopRated } from './IconsSvg/IconTopRated';
import { useToggle } from '../../utils/useToggle';
import { ConteinerItem, PhotoBox, Photo, TitleBox, NameContainer, Name, Price, StyledLink, ProductActivityContainer } from './StyledProductItem';

const ProductItem = (props) => {
  const {name, price, image, route, id} =props

  const [inFavorite, toggleInFavorite] = useToggle();

  console.log(products)

  return (
    <>
    {/* <ProductSlider/> */}

          <ConteinerItem key={id}>
            <PhotoBox>
              <StyledLink to={`/products/${route}`}>
                <Photo alt={name} src={image}/>
              </StyledLink>
              <ProductActivityContainer>
                <IconSale />
                {/* <IconNew/> */}
                {/* <IconTopRated/> */}
              </ProductActivityContainer>
            </PhotoBox>
            <TitleBox>
              <StyledLink to={`/products/${route}`}>
                <NameContainer>
                  <Name>{name.toUpperCase()}</Name>
                </NameContainer>
              </StyledLink>
              {!inFavorite && <RegularIconFavorite onClick={() => toggleInFavorite(id)} />}
              {inFavorite && <SolidIconFavorite onClick={() => toggleInFavorite(id)} />}
              <Price>{price.toLocaleString()}</Price>
            </TitleBox>
          </ConteinerItem>


    </>
  )
}

export default ProductItem;
