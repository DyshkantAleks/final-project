import React from 'react';
import CheckboxGroup from 'react-checkbox-group';
import { slide as MobileFilter } from 'react-burger-menu';
import { FilterTwoTone } from '@ant-design/icons';
import { Collapse } from 'antd';

import { FilterName, StyledChackboxName, StyledCheckboxGroup, StyledLabel, Wrapper } from '../../pages/ProductList/StyledProductListPage';
import { RangeSlider } from '../RangeSlider/RangeSlider';

export const FilterMobile = (props) => {
  const {arrayOfColors, checkedColors, onChackedColorHandler, arrayOfBrands, checkedBrands, onCheckedBrandHandler, onAfterChangeHandler} = props
  const { Panel } = Collapse;
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
      <MobileFilter disableAutoFocus customBurgerIcon={<FilterTwoTone twoToneColor="#7191a6" />}>
        <Collapse ghost>
          <Panel header="Цена" key="1">
            <RangeSlider onAfterChangeHandler={onAfterChangeHandler}/>
          </Panel>
          <Panel header="Цвет" key="2">
            {colorCheckBoxes()}
          </Panel>
          <Panel header="Бренд" key="3">
            {brandCheckBoxes()}
          </Panel>
        </Collapse>
      </MobileFilter>
    </Wrapper>
  )
}