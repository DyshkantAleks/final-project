import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { message } from 'antd';

import { decreaseQuantity, increaseQuantity } from '../../store/cart/operations';

export const Counter = ({ cartQuantity, quantity, id, name }) => {
  const dispatch = useDispatch();

  const increaseQty = () => {
    if (cartQuantity < quantity) {
      dispatch(increaseQuantity(id))
    } else {
      message.warn(`На складе есть только ${quantity}шт ${name}`)
    }
  }

  const decreaseQty = () => {
    if (cartQuantity > 1) {
      dispatch(decreaseQuantity(id))
    }
  }
  return (
    <CouterContainer>
      <BtnDecr onClick ={() => decreaseQty()}>-</BtnDecr>
      <CountInput readOnly value={cartQuantity + ' шт'}/>

      <BtnIncr onClick={() => increaseQty()}>+</BtnIncr>

    </CouterContainer>
  )
}

const CouterContainer = styled.div`
  //margin: 0 auto;
  margin: ${props => (props.margin ? 0 : '0 auto')};
  border: 1px solid #e2e6ea;
  border-radius: 0.5rem;
  width: 90px;
  display: flex;
`
const BtnDecr = styled.button`
  font-size: 1.5rem;
  border: 1px solid transparent; 
  border-top-left-radius: 0.4rem;
  border-bottom-left-radius: 0.4rem;
  flex-grow: 1;
  background-color: #f8f9fa;
    &:focus{
      outline: none;
    }
    &:hover{
      background-color: #e2e6ea;
      cursor: pointer;
    } 
    &:active{
      font-weight: bold;
    }
`
const BtnIncr = styled.button`
  font-size: 1.5rem;
  border: 1px solid transparent;
  border-top-right-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  flex-grow: 1;
  background-color: #f8f9fa;
    &:focus{
      outline: none;
    }  
    &:hover{
      background-color: #e2e6ea;
      cursor: pointer;
    }
    &:active{
      font-weight: bold;
    } 
`
const CountInput = styled.input`
  border: none;
  width:40px;
  text-align: center;
    &:focus{
      outline: none;
      font-weight: bold;
    } 
`
