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
  const {name, price, image, route, id} =props

  // const products = useSelector(selectProducts);
  // const dispatch = useDispatch();
  //
  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch]);

  const [inFavorite, toggleInFavorite] = useToggle();

  console.log(products)

  return (
    <>
<<<<<<< HEAD
      {
        products.map((item, index) =>
          <ConteinerItem key={index}>
            <PhotoBox>
              <StyledLink to={`/products/${item.name}`}>
                <Photo alt={item.name} src={item.imageUrl[0]} />
=======
    {/* <ProductSlider/> */}

          <ConteinerItem key={id}>
            <PhotoBox>
              <StyledLink to={`/products/${route}`}>
                <Photo alt={name} src={image}/>
>>>>>>> Vika
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
<<<<<<< HEAD
                  <Name>{item.name}</Name>
=======
                  <Name>{name.toUpperCase()}</Name>
>>>>>>> Vika
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
