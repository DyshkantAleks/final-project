import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

export const Counter = (props) => {
  const [value, setValue] = useState(1);
  const increment = () => {
    setValue(value + 1);
  }
  const decrement = () => {
    setValue(value - 1)
  }
  return (
    <CouterContainer>
      <BtnDecr onClick ={decrement}>-</BtnDecr>
      <CountInput value={value + ' шт'}/>
      <BtnIncr onClick={increment}>+</BtnIncr>
    </CouterContainer>
  )
}

const CouterContainer = styled.div`
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