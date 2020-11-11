import React from 'react';

import { Container, StyledCheckbox } from './StyledCheckboxFilter.jsx';

export const CheckboxFilter = ({ filterOption }) => {
  return (
    <Container className="checkbox-wrapper">
      <StyledCheckbox>{filterOption}</StyledCheckbox>
    </Container>
  );
};