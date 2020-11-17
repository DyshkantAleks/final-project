import React from 'react';
import styled from 'styled-components';
import { device } from '../../styles/breakpoints/breakpoints';
import { icon } from '../../commons/Header/AccountInfo/icons.jsx';
import { Button } from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { removeProductFromFav } from '../../store/favorites/middlware.jsx';
import { selectCart } from '../../store/cart/selectors.jsx';
import {
  CartItemContainer,
  CloseBtnContainer,
  CartNameCode,
  CartImage,
  CartColor,
} from '../Cart/CartItem';
import { addProductToCart } from '../../store/cart/middlware.jsx';
import { StyledLink } from '../../components/ProductItem/StyledProductItem.jsx';

export const FavItem = ({
  imageUrl,
  name,
  color,
  itemNo,
  _id,
  item,
  sizes,
  route,
}) => {
  const dispatch = useDispatch();

  const btnClsFavorite = (id) => {
    dispatch(removeProductFromFav(id));
  };

  const productInCart = useSelector(selectCart);
  const btnInCart = productInCart
    .map((itemCart) => itemCart.product._id)
    .includes(_id);
  const btnAddToCart = (product, quantity) => {
    dispatch(addProductToCart(product, quantity));
  };

  return (
    <CartItemContainer fav>
      <CloseBtnContainer onClick={() => btnClsFavorite(_id)}>
        {icon.close}
      </CloseBtnContainer>
      <StyledLink to={`/products/${route}`}>
        <CartImage src={imageUrl[0]} />
      </StyledLink>
      <StyledLink to={`/products/${route}`}>
        <CartNameCode>
          <h4>{name}</h4>
          <p>Код: {itemNo}</p>
        </CartNameCode>
      </StyledLink>
      <CartColor>{color}</CartColor>
      <FavDimensions>
        {sizes.height}cм x {sizes.width}см x {sizes.length}см
      </FavDimensions>
      {btnInCart ? (
        <Button disabled width={'100%'} text={'В корзине'} />
      ) : (
        <Button
          width={'100%'}
          text={'Купить'}
          onClick={() => btnAddToCart(item, 1)}
        />
      )}
    </CartItemContainer>
  );
};

const FavDimensions = styled.p`
  margin-bottom: 0;

  @media ${device.mobile} {
    text-align: left;
    display: none;
  }
  @media ${device.tabletS} {
    text-align: center;
    padding-right: 5%;
  }
  @media ${device.tabletM} {
    display: inherit;
  }
`;
