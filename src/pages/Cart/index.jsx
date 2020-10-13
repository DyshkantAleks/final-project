import React from "react";
//import { Header } from "../../commons/Header/Header";
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectCart } from '../../store/cart/selectors';
import { CartItem } from "./CartItem";
import { Button } from '../../components/Button'

export const CartPage = () => {

    const cartItems = useSelector(selectCart)

    return (
        <>
            <h1>Кошик</h1>
            <CartContainer>
                {
                    cartItems.map(item =>
                        <CartItem {...item}
                        // key={item.id}
                        />
                    )}
            </CartContainer>

            <CartTotalContainer>            
              <CartTotalText>Всього у кошику N товари на суму</CartTotalText>
              <Button text="Оформити замовлення" color="green" />
             </CartTotalContainer>
        </>
    )
}

const CartContainer = styled.div`
color: red;
`
const CartTotalContainer = styled.div`
padding-top: 2rem;
display: flex; 
justify-content: space-between;
`

const CartTotalText = styled.h4`
font-size: 1.25rem;
color: #000000;
`