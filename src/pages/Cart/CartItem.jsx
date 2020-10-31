import React from 'react';
import styled from 'styled-components';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Counter } from '../../components/Counter';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/cart/actions-creators';

export const CartItem = ({ imageUrl, currentPrice, name, color, itemNo, quantity, cartQuantity, _id }) => {

  const dispatch = useDispatch();
  const removeBtnHeandler = (id) => dispatch(removeFromCart(id));
  
  return (
    <CartItemContainer>
      <CloseBtn icon={faTimes} onClick={() => removeBtnHeandler(_id)}/>
      <CartImage src={imageUrl[0]} />
      <CartNameCode>
        <h4>{name}</h4>
        <p>Код: {itemNo}</p>
      </CartNameCode>
      <CartColor>
        {color}
      </CartColor>
      <Counter cartQuantity={cartQuantity} quantity={quantity} id={_id}/>
      <CartPrice>{(currentPrice * cartQuantity).toLocaleString()} грн</CartPrice>
    </CartItemContainer>
  );
}

const CartItemContainer = styled.div`
        align-items: center;
        display: grid;
        grid-template-columns: 5% 10% 20% 1fr 1fr 10%;
        grid-gap: 1.9rem;
        padding: 1.7rem;
        border-bottom: 1px solid #D3D7DA;
        font-size: 14px;

        :last-child {
                border-bottom: 2px solid #007042;
        }
        `

// const CloseBtn = styled.span`
// color: #A0A9AF;
// font-size: 2rem;
// font-weight: bold;
// `

const CartImage = styled.img`
height: auto;
width: 5rem;
`

const CartNameCode = styled.div`
text-align: left;

h4 {
    font-weight: bold;
    color: #000000;
    font-family: Open Sans;
    margin: 0;
}

p {
color: #57646E;
display: block;
font-size: 12px;
margin: 0;
}
`

const CartColor = styled.p`
font-family: Open Sans;
font-size: 14px;
color: #000000;`

const CartPrice = styled.p`
font-weight: bold;
font-size: 1em;
font-family: inherit;
color: #000000;
`

const CloseBtn = styled(FontAwesomeIcon)`
font-size: 2em;
color: #A0A9AF;
&:hover{
    cursor: pointer;
    color: #007042;
}
`