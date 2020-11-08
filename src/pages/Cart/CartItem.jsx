import React from 'react';
import styled from 'styled-components';

import { icon } from '../../commons/Header/AccountInfo/icons.jsx';
import { Counter } from '../../components/Counter';
import { device } from '../../styles/breakpoints/breakpoints';
import { useDispatch } from 'react-redux';
import { removeProductFromCart } from '../../store/cart/middlware.jsx';
import { Link } from 'react-router-dom';

export const CartItem = ({ imageUrl, currentPrice, name, color, itemNo, quantity, cartQuantity, _id, route }) => {
  
  const dispatch = useDispatch();
  const btnCloseheandler = (id) => {
    dispatch(removeProductFromCart(id))
  };
  return (
    <CartItemContainer>
      <CloseBtnContainer onClick={() => btnCloseheandler(_id)}>{icon.close}</CloseBtnContainer>
      <NewStyledLink to={`/products/${route}`}>
        <CartImage src={imageUrl[0]} />
      </NewStyledLink>
      <NewStyledLink to={`/products/${route}`}>
        <CartNameCode>
          <h4>{name}</h4>
          <p>Код: {itemNo}</p>
        </CartNameCode>
      </NewStyledLink>
      <CartColor>
        {color}
      </CartColor>
      <Counter cartQuantity={cartQuantity} quantity={quantity} id={_id}/>
       <CartPrice>{(currentPrice * cartQuantity).toLocaleString()} грн</CartPrice>
      {/* <CartPrice>{currentPrice} грн</CartPrice> */}
    </CartItemContainer>
  )
}

export const CartItemContainer = styled.div`
        align-items: center;
        display: grid;
        // display: flex;
        // justify-content: space-between;
        // align-items: center;
        padding: 1.7rem;
        border-bottom: 1px solid #D3D7DA;
        font-size: 14px;

        :last-child {
                border-bottom: 2px solid #007042;
        }

        @media ${device.mobile}{
        grid-template-columns: 7rem 1fr 15rem;
        padding: 1.7rem 0.5rem;
        position: relative;
        grid-gap: 1rem;
        }

        @media ${device.tabletS}{
          grid-template-columns: ${props => (props.fav ? '5% 15% 1fr 1fr 130px' : '3% 13% 26% 21% 21% 20%')};
          //grid-template-columns: 3% 13% 26% 21% 21% 20%;
          position: static;
          grid-gap: inherit;
          }

          @media ${device.tabletM}{
          grid-template-columns: 5% 7% 30% 20% 20% 1fr;
        }
        `

export const CartImage = styled.img`
width: 100%;
height: auto;
padding-left: 0.5rem;


@media ${device.mobile}{
grid-row-end: 4;
grid-column-end: 4;
}

@media ${device.tabletS}{
  grid-row-end: auto;
  }
`

export const CartNameCode = styled.div`
text-align: left;

h4 {
    font-weight: bold;
    color: #000000;
    margin: 0;
}

@media ${device.tabletS}{
  font-size: 13px;
  text-align: center;
  padding-left: 10px;
}

@media ${device.tabletM}{
  font-size: 14px;
  text-align: center;
  width: 100%;
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
margin: 0;

@media ${device.mobile}{
  //text-align: left;
  //grid-row-start: 3;
  grid-column-end: 4;
}

@media ${device.tabletS}{
  font-size: 13px;
  text-align: inherit;
  grid-column-end: auto;
}

@media ${device.tabletM}{
  font-size: 14px;
}
`
export const CloseBtnContainer = styled.div`
width: 1.5rem;
height: 1.5rem;
fill: #A0A9AF;
  &:hover{
    fill: #c91212;
    cursor: pointer;
  }

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
`;

const NewStyledLink = styled(Link)`
display: flex;
align-items: center;
justify-content: space-between;
overflow: hidden;
`