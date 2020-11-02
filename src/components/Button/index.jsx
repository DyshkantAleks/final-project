import React from 'react';
import { StyledButton } from './StyledButton';
// import styled from 'styled-components';

export const Button = (props) => {
  const { text, onClick, color , width, disabled }= props;
  return (
    <>
      {/* { color ? <GreendBtn onClick={onClick}>{text}</GreendBtn> : <WhitedBtn onClick={onClick}>{text}</WhitedBtn>
      } */}
      <StyledButton disabled={disabled} width={width} color={color} onClick={onClick}>{text}</StyledButton>
    </>
  )
}



// const GreendBtn = styled.button`
//   border: 1px solid #7191A6;
//   color: #fff;
//   background-color: #7191A6;
//   padding: 10px 20px;
//   border-radius: 5px;
//   font-weight: bold;
//     &:hover{
//       cursor: pointer;
//       color:#7191A6;
//       background-color: #fff;
//       border: 1px solid #7191A6;
//     }
//     &:focus{
//         outline: none;
//     } 
// `
// const WhitedBtn = styled.button`
//   border: 1px solid #7191A6;
//   color:#7191A6;
//   background-color: #fff;
//   padding: 10px 20px;
//   border-radius: 5px;
//   font-weight: bold;
//     &:hover{
//       cursor: pointer;
//       color: #fff;
//       background-color: #7191A6;
//     }
//     &:focus{
//         outline: none;
//     } 
// `