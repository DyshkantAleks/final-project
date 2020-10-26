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
import { selectProducts } from '../../store/products_draft/selectors';
import { getProducts } from '../../store/products_draft/middlware';

const ProductItem = (props) => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const [inFavorite, toggleInFavorite] = useToggle();

  console.log(products)

  return (
    <>
      {
        products.map((item, index) =>
          <ConteinerItem key={index}>
            <PhotoBox>
              <StyledLink to={`/products/${item.name}`}>
                <Photo alt={item.name} src={item.imageUrl[0]} />
              </StyledLink>
              <ProductActivityContainer>
                <IconSale />
                {/* <IconNew/> */}
                {/* <IconTopRated/> */}
              </ProductActivityContainer>
            </PhotoBox>
            <TitleBox>
              <StyledLink to={`/products/${item.name}`}>
                <NameContainer>
                  <Name>{item.name}</Name>
                </NameContainer>
              </StyledLink>
              {!inFavorite && <RegularIconFavorite onClick={() => toggleInFavorite(item._id)} />}
              {inFavorite && <SolidIconFavorite onClick={() => toggleInFavorite(item._id)} />}
              <Price>{item.currentPrice.toLocaleString()}</Price>
            </TitleBox>
          </ConteinerItem>
        )
      }
    </>
  )
}

export default ProductItem;
