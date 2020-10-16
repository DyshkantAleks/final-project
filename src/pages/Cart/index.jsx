import React from "react";
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { selectCart } from '../../store/cart/selectors';
import { CartItem } from "./CartItem";
import { Button } from '../../components/Button'

export const CartPage = () => {

    const cartItems = useSelector(selectCart);
    const menuArray = [null, null, 'Назва товару', 'Колір', 'Кількість', 'Ціна'];
    return (
        <>
            <h1>Кошик</h1>

            <CartContainer>
                <CartMenu>
                    {menuArray.map(item => <p>{item}</p>)}
                </CartMenu>
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
`

const CartMenu = styled.div`
    background-color: #F5F5F5;
    display: grid;
    grid-template-columns: 5% 10% 20% 1fr 1fr 10%;
    grid-gap: 1.9rem;
    padding: 0.7rem 1.7rem;

    p {
        font-size: 14px;
        // padding: 0.8rem;
        color: #007042;
        font-weight: bold;
    }
`

const CartTotalContainer = styled.div`
padding-top: 2rem;
display: flex; 
justify-content: space-between;
`

const CartTotalText = styled.h4`
font-size: 1.5rem;
color: #000000;
`