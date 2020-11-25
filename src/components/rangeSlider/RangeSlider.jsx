import React from 'react';

import { Price, Currency, StyledSlider } from './StyledRangeSlider.jsx';

export const RangeSlider = ({ price = 'Цена', currency = 'грн', min = 0, max = 200000, step = 100, defaultValue = [1000, 160000], onAfterChangeHandler }) => {
  return (
    <>
      <Price>{price}<Currency>{currency}</Currency></Price>
      <StyledSlider range min={min} max={max} step={step} defaultValue={defaultValue} onAfterChange={onAfterChangeHandler} />
    </>
  );
}