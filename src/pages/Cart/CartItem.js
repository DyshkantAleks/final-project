import React from "react";
import styled from 'styled-components';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CartItem = ({ image, price, name, color, code }) => {

    return (
        <CartItemContainer>
            <CloseBtn icon={faTimes} />
            <CartImage src={image} />
            <CartNameCode>
                <h4>{name}</h4>
                <p>Код: {code}</p>
            </CartNameCode>
            <CartColor>
               {color}
            </CartColor>
            <CartItemsNumber></CartItemsNumber>
            <CartPrice>{price} грн</CartPrice>
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
color: #000000;
`

const CartItemsNumber = styled.div`

`

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
    color: #007042;
}
`