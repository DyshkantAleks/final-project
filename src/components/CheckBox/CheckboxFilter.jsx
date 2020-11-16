import React from 'react';

import { Container, StyledCheckbox } from './StyledCheckboxFilter.jsx';

<<<<<<< HEAD
export const CheckboxFilter = ({ filterOption }) => {
  return (
    <Container className="checkbox-wrapper">
      <StyledCheckbox>{filterOption}</StyledCheckbox>
=======
export const CheckboxFilter = ({ filterOption, onClickHandler }) => {
  return (
    <Container className="checkbox-wrapper">
      <StyledCheckbox onClick={onClickHandler}>{filterOption}</StyledCheckbox>
>>>>>>> 088fcbfc5cf8fddf78d10cfa0c3b40e72aa81d9f
    </Container>
  );
};