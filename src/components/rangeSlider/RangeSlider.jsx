import React from 'react';

import { Price, Currency, StyledSlider } from './StyledRangeSlider.jsx';


export const RangeSlider = ({ price, currency, min, max, step, defaultValue, onAfterChangeHandler }) => {
  return (
    <>
      <Price>{price}<Currency>{currency}</Currency></Price>
      <StyledSlider min={min} max={max} step={step} defaultValue={defaultValue} onAfterChange={onAfterChangeHandler} tooltipVisible />
    </>
  );
}