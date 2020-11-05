import React from 'react'
import styled from 'styled-components'
import { selectCart } from '../../store/cart/selectors'
import { CartItem } from './CartItem'
import { useSelector } from 'react-redux'
import { device } from '../../styles/breakpoints/breakpoints'



export const OrderCart = () => {
    const cartItems = useSelector(selectCart)
    console.log(cartItems);

    const sumCart = cartItems.reduce(function (sum, current) {
        return sum + current.product.currentPrice * current.cartQuantity
      }, 0)
    
      const menuArray = ['Название', 'Цвет', 'Количество', 'Цена']

      return (
        <ContentContairer>
          <CartContainer>
            <CartMenu>
              {menuArray.map((item, index) => <p key={index}>{item}</p>)}
            </CartMenu>
            {
              cartItems.map(item =>
                <CartItem
                  {...item.product}
                  cartQuantity={item.cartQuantity}
                  key={item.id}
                  cart='true'
                />
              )
            }
          </CartContainer>
          <CartTotalContainer>
            <CartTotalText>Всего в корзине {cartItems.length} товаров на сумму {sumCart.toLocaleString()} грн</CartTotalText>
          </CartTotalContainer>
        </ContentContairer>
      )
    }
    
    const ContentContairer = styled.div`
    margin-left: 1em;
    margin-bottom: 1em;
    `

    const CartContainer = styled.div`
    margin: 0 auto;
    text-align: center;
    `
    
    const CartMenu = styled.div`
    background-color: #F5F5F5;
    grid-template-columns: 1fr 1fr 1fr 18%;
    padding: 0.7rem 1.1rem 0.8rem 7rem;
      @media ${device.mobile}{
        display: none;
      };
      @media ${device.tabletS}{
        display: grid;
        align-items: center;
      };
      p {
        font-size: 14px;
        // padding: 0.8rem;
        color: #007042;
        font-weight: bold;
      };
    `
    
    const CartTotalContainer = styled.div`
    padding-top: 2rem;
    display: flex; 
    max-width: 60rem;
    margin: 0 auto;
    `
    
    const CartTotalText = styled.h4`
    font-size: 1.5rem;
    color: #000000;
      @media ${device.tabletS}{
        width: 100%;
      };
      @media ${device.tabletM}{
        width: inherit;
      };
    `
    