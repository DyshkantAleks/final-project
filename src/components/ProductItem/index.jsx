import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RegularIconFavorite } from './IconsSvg/RegularIconFavorite';
import { SolidIconFavorite } from './IconsSvg/SolidIconFavorite';
import { IconSale } from './IconsSvg/IconSale';
import { IconNew } from './IconsSvg/IconNew';
import { IconTopRated } from './IconsSvg/IconTopRated';
import { useToggle } from '../../utils/useToggle';
import { ConteinerItem, PhotoBox, Photo, TitleBox, NameContainer, Name, Price, StyledLink, ProductActivityContainer, PreviousPrice, PriceContainer, CurrentPrice, ButtonContainer } from './StyledProductItem';
import { Button } from '../Button';
import { selectCart } from '../../store/cart/selectors';
import { selectProducts } from '../../store/products_draft/selectors';


export const ProductItem = (props) => {
  const { name, price, image, route, id, isNewProduct, isTopRated, isSale, previousPrice } = props

  const [inFavorite, toggleInFavorite] = useToggle();
  const [btnInCart, setBtnInCart] = useState(false)

  const allProducts = useSelector(selectProducts);

  const productInCart = useSelector(selectCart);
  const cartItems = productInCart.map(item => item.product._id);

  const allProductsItem = allProducts.map(item => item._id)

  const itemInCart = cartItems.filter(function (elementOfCartArr) {
    return allProductsItem.some(function (elementOfProductArr) {
      return elementOfCartArr === elementOfProductArr;
    });
  });

  const convArrToObj = function (array) {
    let newObj = {};
    if (typeof array === 'object') {
      for (const i in array) {
        const newObjInArr = convArrToObj(array[i]);
        newObj[i] = newObjInArr;
      }
    } else {
      newObj = array;
    }
    return newObj;
  }

  useEffect(() => {
    const objectInCart = convArrToObj(itemInCart);
    for (const key in objectInCart) {
      let objId = objectInCart[key]
      if (objId === id) {
        setBtnInCart(true)
      } else {
        setBtnInCart(false)
      }
    }
  }, [id, itemInCart])

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
            {btnInCart ? <Button text={'В корзине'} /> : <Button text={'Купить'} />}
          </ButtonContainer>
        </TitleBox>
      </ConteinerItem>
    </>
  )
};