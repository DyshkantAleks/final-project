import React from 'react';
import CheckboxGroup from 'react-checkbox-group';

import { FilterName, StyledChackboxName, StyledCheckboxGroup, StyledLabel, Wrapper } from '../../pages/ProductList/StyledProductListPage';
import { RangeSlider } from '../RangeSlider/RangeSlider';

export const FilterDesktop = (props) => {
  const {arrayOfColors, checkedColors, onChackedColorHandler, arrayOfBrands, checkedBrands, onCheckedBrandHandler, onAfterChangeHandler} = props

  const colorCheckBoxes = () => {
    return (
      <StyledCheckboxGroup>
        <FilterName>Цвет</FilterName>
        <CheckboxGroup name="Цвет" value={checkedColors} onChange={onChackedColorHandler}>
          {(Checkbox) => (
            [...arrayOfColors].map((item, index) =>
              <StyledLabel key={index} >
                <Checkbox value={item} />
                <span className="checkbox"></span>
                <StyledChackboxName>{item}</StyledChackboxName>
              </StyledLabel>
            )
          )}
        </CheckboxGroup>
      </StyledCheckboxGroup>
    )
  }
      
  const brandCheckBoxes = () => {
    return (
      <StyledCheckboxGroup>
        <FilterName>Бренд</FilterName>
        <CheckboxGroup name="Бренд" value={checkedBrands} onChange={onCheckedBrandHandler}>
          {(Checkbox) => (
            [...arrayOfBrands].map((item, index) =>
              <StyledLabel key={index} >
                <Checkbox value={item} />
                <span className="checkbox"></span>
                <StyledChackboxName>{item}</StyledChackboxName>
              </StyledLabel>
            )
          )}
        </CheckboxGroup>
      </StyledCheckboxGroup>
    )
  }
  
  return (
    <Wrapper>
      <RangeSlider onAfterChangeHandler={onAfterChangeHandler}/>
      {colorCheckBoxes()}
      {brandCheckBoxes()}
    </Wrapper>
  )
}