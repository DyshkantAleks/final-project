import React from 'react';

import { MainTitle } from './StyledTitle';

export const Title = (props) => {
  const { text } = props
  return (
    <MainTitle>{text}</MainTitle>
  )
};