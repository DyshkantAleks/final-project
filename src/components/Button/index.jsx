import React from 'react';
import styled from 'styled-components';

export const Button = ({text, onClick, color = 'green'}) => {
  return (
    <>
      { color === 'green' ? <GreendBtn onClick={onClick}>{text}</GreendBtn> : <WhitedBtn onClick={onClick}>{text}</WhitedBtn>}
    </>
  )
}

const GreendBtn = styled.button`
  border: none;
  color: #fff;
  background-color: #007042;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
    &:hover{
      color:#007042;
      background-color: #fff
    }
    &:focus{
        outline: none;
    } 
`
const WhitedBtn = styled.button`
  border: none;
  color:#007042;
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
    &:hover{
      color: #fff;
      background-color: #007042;
    }
    &:focus{
        outline: none;
    } 
`