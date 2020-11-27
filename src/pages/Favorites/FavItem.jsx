import React from 'react';
import PropTypes from 'prop-types';
import { icon } from '../../commons/Header/AccountInfo/icons.jsx';
import { Button } from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { removeProductFromFav } from '../../store/favorites/operations.jsx';
import { selectCart } from '../../store/cart/selectors.jsx';
import {
  CartItemContainer,
  CloseBtnContainer,
  CartNameCode,
  CartImage,
  CartColor
} from '../Cart/StyledCartItem';
import { FavDimensions } from './StyledFavoriteItemPage';
import { addProductToCart } from '../../store/cart/operations.jsx';
import { StyledLink } from '../../components/ProductItem/StyledProductItem.jsx';

export const FavItem = (props) => {
  const { imageUrl, name, color, itemNo, _id, item, sizes, route, quantity } = props;
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
      {quantity > 0 ? <>
        {btnInCart ? <Button center={'true'} disabled width={'true'} text={'В корзине'} /> : <Button center={'true'} color={'true'} width={'true'} text={'Купить'} onClick={() => btnAddToCart(item, 1)} />}
      </> : <>
        <Button disabled center={'true'} width={'true'} text={'Отсутствует'} />
      </>
      }
    </CartItemContainer>
  );
};

FavItem.propTypes = {
  imageUrl: PropTypes.array,
  name: PropTypes.string,
  color: PropTypes.string,
  itemNo: PropTypes.string,
  _id: PropTypes.string,
  item: PropTypes.object,
  sizes: PropTypes.object,
  route: PropTypes.string,
  quantity: PropTypes.number
};
