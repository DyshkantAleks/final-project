<<<<<<< HEAD
import React from 'react';

import { Price, Currency, StyledSlider } from './StyledRangeSlider.jsx';

=======
import React, { useState } from 'react';

import { Price, Currency, StyledSlider } from './StyledRangeSlider.jsx';


>>>>>>> 088fcbfc5cf8fddf78d10cfa0c3b40e72aa81d9f
export const RangeSlider = ({ price, currency, min, max, step, defaultValue, onAfterChangeHandler }) => {
  return (
    <>
      <Price>{price}<Currency>{currency}</Currency></Price>
<<<<<<< HEAD
      <StyledSlider range min={min} max={max} step={step} defaultValue={defaultValue} onAfterChange={onAfterChangeHandler} />
=======
      <StyledSlider min={min} max={max} step={step} defaultValue={defaultValue} onAfterChange={onAfterChangeHandler} tooltipVisible />
>>>>>>> 088fcbfc5cf8fddf78d10cfa0c3b40e72aa81d9f
    </>
  );
}