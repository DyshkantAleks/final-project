import React from 'react'
import styled from 'styled-components'

export const Button = ({ text, onClick, color = 'green' }) => {
  return (
    <>
      {color === 'green' ? <GreendBtn onClick={onClick}>{text}</GreendBtn> : <WhitedBtn onClick={onClick}>{text}</WhitedBtn>}
    </>
  )
}

const GreendBtn = styled.button`
  border: 1px solid #007042;
  color: #fff;
  background-color: #007042;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
    &:hover{
      cursor: pointer;
      color:#007042;
      background-color: #fff;
      border: 1px solid #007042;
    }
    &:focus{
        outline: none;
    } 
`
const WhitedBtn = styled.button`
  border: 1px solid #007042;
  color:#007042;
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
    &:hover{
      cursor: pointer;
      color: #fff;
      background-color: #007042;
    }
    &:focus{
        outline: none;
    } 
`
