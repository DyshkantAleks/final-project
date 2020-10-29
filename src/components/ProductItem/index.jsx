import React, {useState} from 'react';
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';


import { RegularIconFavorite } from './IconsSvg/RegularIconFavorite';
import { SolidIconFavorite } from './IconsSvg/SolidIconFavorite';
import { IconSale } from './IconsSvg/IconSale';
import { IconNew } from './IconsSvg/IconNew';
import { IconTopRated } from './IconsSvg/IconTopRated';
import { useToggle } from '../../utils/useToggle';
import { ConteinerItem, PhotoBox, Photo, TitleBox, NameContainer, Name, Price, StyledLink, ProductActivityContainer, PreviousPrice, PriceContainer, CurrentPrice, ButtonContainer } from './StyledProductItem';
import { Button } from '../Button';
// import { selectCart } from '../../store/cart/selectors';
// import { selectById, selectProducts, selectProductsForFilter } from '../../store/products_draft/selectors';


export const ProductItem = (props) => {
  const { name, price, image, route, id, isNewProduct, isTopRated, isSale, previousPrice, item } = props

  const [inFavorite, toggleInFavorite] = useToggle();

  const [inCart, setInCart]=useState(item);

  console.log(inCart)


  // const productInCart = useSelector(selectCart);
  // const cartItemsId = productInCart.map(item => item.product);

  // const products = useSelector(selectProducts)
  // const productId = products.map(item => item)

  // const result = cartItemsId.filter(function(itemInCart) {
  //   return productId.some(function(itemInProduct) {
  //     return itemInCart._id === itemInProduct._id
  //   });
  // });

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
            {item ? <Button text={'В корзине'} /> : <Button text={'Купить'} />
            }
            {/* {item.map(item => (
              item._id === id ? <Button text={'В корзине'} /> : <Button text={'Купить'} />
            ))} */}
          </ButtonContainer>
        </TitleBox>
      </ConteinerItem>
    </>
  )
};