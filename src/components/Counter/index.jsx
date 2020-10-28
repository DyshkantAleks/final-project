import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { quantityDown, quantityUp } from '../../store/cart/actions-creators';
import { selectProducts } from '../../store/products_draft/selectors';
import { getQuantity } from '../../utils/getQuantity';

export const Counter = ({ id, value }) => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const quantity = getQuantity(products, id)

  const increaseQty = () => {
    if (value < quantity) {
      dispatch(quantityUp(id))
    }
  };
  const decreaseQty = () => {
    if (value > 1) {
      dispatch(quantityDown(id))
    }
  }
  return (
    <CouterContainer>
      <BtnDecr onClick ={() => decreaseQty()}>-</BtnDecr>
      <CountInput readOnly value={value + ' шт'}/>
      <BtnIncr onClick={() => increaseQty()}>+</BtnIncr>
    </CouterContainer>
  )
}

const CouterContainer = styled.div`
  margin: 0 auto;
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