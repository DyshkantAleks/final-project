import React from 'react';
import styled from 'styled-components';

import { icon } from '../../commons/Header/AccountInfo/icons.jsx';
import { Counter } from '../../components/Counter';
import { device } from '../../styles/breakpoints/breakpoints';
import { useDispatch } from 'react-redux';
import { removeProductFromCart } from '../../store/cart/middlware.jsx';

export const CartItem = ({ imageUrl, currentPrice, name, color, itemNo, quantity, cartQuantity, _id }) => {
  
  const dispatch = useDispatch();
  const btnCloseheandler = (id) => {
    dispatch(removeProductFromCart(id))
  };
  
  return (
    <CartItemContainer>
      <CloseBtnContainer onClick={() => btnCloseheandler(_id)}>{icon.close}</CloseBtnContainer>
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
      {/* <CartPrice>{currentPrice} грн</CartPrice> */}
    </CartItemContainer>
  );
}

export const CartItemContainer = styled.div`
        align-items: center;
        display: grid;
        padding: 1.7rem;
        border-bottom: 1px solid #D3D7DA;
        font-size: 14px;

        :last-child {
                border-bottom: 2px solid #007042;
        }

        @media ${device.mobile}{
        grid-template-columns: 6rem 1fr 9rem;
        padding: 0.7rem 1rem;
        position: relative;
        grid-gap: 1rem;
        }

        @media ${device.tabletS}{
          grid-template-columns: ${props => (props.fav ? '2rem 6rem 1fr 1fr 1fr' : '2rem 6rem 1fr 1fr 1fr 18%')};
          position: static;
          grid-gap: inherit;
          }
        `;

export const CartImage = styled.img`
height: 5rem;
width: 5rem;
padding-left: 0.5rem;

@media ${device.mobile}{
grid-row-end: span 3;
grid-row-end: span 3;
}
`

export const CartNameCode = styled.div`
text-align: left;

h4 {
    font-weight: bold;
    color: #000000;
    font-family: Open Sans;
    margin: 0;
}

@media ${device.tabletS}{
  font-size: 13px;
}

@media ${device.tabletM}{
  font-size: 14px;
}

p {
color: #57646E;
display: block;
font-size: 12px;
margin: 0;
}
`

export const CartColor = styled.p`
font-family: Open Sans;
color: #000000;

@media ${device.mobile}{
  grid-column-start: 2;
  grid-column-end: 4;
  text-align: left;
  margin: 0;
  font-size: 12px;
  }

  @media ${device.tabletS}{
    grid-area: auto;
    font-size: 13px;
    text-align: center;
  }

  @media ${device.tabletM}{
    font-size: 14px;
  }
`

export const CartPrice = styled.p`
font-weight: bold;
font-family: inherit;
color: #000000;

@media ${device.mobile}{
  text-align: left;
}

@media ${device.tabletS}{
  font-size: 13px;
  text-align: inherit;
}

@media ${device.tabletM}{
  font-size: 14px;
}
`
export const CloseBtnContainer = styled.div`
width: 2rem;
height: 2rem;
fill: #A0A9AF;

@media ${device.mobile}{
  position: absolute;
  top: 1rem;
  right: 1.7rem;
  width: 2rem;
  }
  
  @media ${device.tabletS}{
    position: inherit;
    width: 2rem;
  }
`

// const AddToCartBtn = styled.button`
// margin: 0 auto;
// border: 1px solid #e2e6ea;
// border-radius: 0.5rem;
// padding: 0.7rem;
// width: 100%;
// display: flex;
// justify-content: center;
// `

// const CloseBtn = styled(FontAwesomeIcon)`
// font-size: 2em;
// color: #A0A9AF;
// &:hover{
//     cursor: pointer;
//     color: #007042;
// }

// @media ${device.mobile}{
// position: absolute;
// top: 0.5rem;
// right: 1.7rem;
// }

// @media ${device.tabletS}{
//   position: inherit;
// }
// `
