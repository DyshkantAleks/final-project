import React from 'react';

import { Container, StyledCheckbox } from './StyledCheckboxFilter.jsx';

export const CheckboxFilter = ({ filterOption, onClickHandler }) => {
  return (
    <Container className="checkbox-wrapper">
      <StyledCheckbox onClick={onClickHandler}>{filterOption}</StyledCheckbox>
    </Container>
  );
};