import React from 'react';
import styled from 'styled-components';

<<<<<<< HEAD
export const Button = ({ text, onClick, color = '#7191A6' }) => {
  return (
    <>
      { color ? <GreendBtn onClick={onClick}>{text}</GreendBtn> : <WhitedBtn onClick={onClick}>{text}</WhitedBtn>
      }
=======
export const Button = ({text, onClick, color = 'green', type}) => {
  return (
    <>
      { color === 'green' ? <GreendBtn type={type} onClick={onClick}>{text}</GreendBtn> : <WhitedBtn type={type} onClick={onClick}>{text}</WhitedBtn>}
>>>>>>> alex
    </>
  )
}

const GreendBtn = styled.button`
  border: 1px solid #7191A6;
  color: #fff;
  background-color: #7191A6;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
    &:hover{
      cursor: pointer;
      color:#7191A6;
      background-color: #fff;
      border: 1px solid #7191A6;
    }
    &:focus{
        outline: none;
    } 
`
const WhitedBtn = styled.button`
  border: 1px solid #7191A6;
  color:#7191A6;
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
    &:hover{
      cursor: pointer;
      color: #fff;
      background-color: #7191A6;
    }
    &:focus{
        outline: none;
    } 
`