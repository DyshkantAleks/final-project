import React from 'react';

import { StyledButton } from './StyledButton';

export const Button = (props) => {
  const { text, onClick, color, width, disabled } = props;
  return (
    <>
      <StyledButton disabled={disabled} width={width} color={color} onClick={onClick}>{text}</StyledButton>
    </>
  )
}