import React from 'react';
import { icon } from '../../commons/Header/AccountInfo/icons.jsx';
import { Button } from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { removeProductFromFav } from '../../store/favorites/middlware.jsx';
import { selectCart } from '../../store/cart/selectors.jsx';
import { CartItemContainer, CloseBtnContainer, CartNameCode, CartImage, CartColor} from '../Cart/CartItem';
import { addProductToCart } from '../../store/cart/middlware.jsx';

export const FavItem = ({ imageUrl, name, color, itemNo, _id, item }) => {

  const dispatch = useDispatch();

  const btnClsFavorite = (id) => {
    dispatch(removeProductFromFav(id))
  }

  const productInCart = useSelector(selectCart);
  const btnInCart = productInCart.map(itemCart => itemCart.product._id).includes(_id);
  const btnAddToCart = (product, quantity) => {
    dispatch(addProductToCart(product, quantity))
  }

  return (
    <CartItemContainer fav>
      <CloseBtnContainer onClick={() => btnClsFavorite(_id)}>{icon.close}</CloseBtnContainer>
      <CartImage src={imageUrl[0]} />
      <CartNameCode>
        <h4>{name}</h4>
        <p>Код: {itemNo}</p>
      </CartNameCode>
      <CartColor>
        {color}
      </CartColor>
      {btnInCart ? <Button text={'В корзине'}/> : <Button color text={'Добавить в корзину'} onClick={() => btnAddToCart(item, 1)}/>}
    </CartItemContainer>
  );
}
