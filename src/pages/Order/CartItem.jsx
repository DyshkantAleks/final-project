import React from 'react'
import PropTypes from 'prop-types';

import {  
  CloseBtnContainer, 
  CartPrice, 
  CartText, 
  CartNameCode, 
  OrderCartImage, 
  OrderCartItemContainer 
} from '../Cart/StyledCartItem';

export const CartItem = ({
  imageUrl,
  currentPrice,
  name,
  color,
  itemNo,
  cartQuantity,
  route,
}) => {

  return (
    <OrderCartItemContainer>
      <CloseBtnContainer></CloseBtnContainer>
        <OrderCartImage src={imageUrl[0]} />
        <CartNameCode>
          <h4>{name}</h4>
          <p>Код: {itemNo}</p>
        </CartNameCode>
      <CartText>{color}</CartText>
      <CartText>{cartQuantity}</CartText>
      <CartPrice>
        {(currentPrice * cartQuantity).toLocaleString()} грн
      </CartPrice>
    </OrderCartItemContainer>
  );
};

CartItem.propTypes = {
  imageUrl: PropTypes.array,
  currentPrice: PropTypes.number,
  name: PropTypes.string,
  color: PropTypes.string,
  itemNo: PropTypes.string,
  cartQuantityy: PropTypes.number,
  route: PropTypes.string,
};
