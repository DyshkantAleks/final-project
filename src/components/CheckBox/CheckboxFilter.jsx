import React from 'react';

import { Container, FilterName, Wrapper, Popup, Link, StyledCheckbox } from './StyledCheckboxFilter.jsx';

export const CheckboxFilter = (props) => {
  const { filterName, filterOption, quantityOfProducts } = props;
  function onClick (e) {
    const wrapper = e.target.closest('div');

    if (!wrapper.querySelector('.ant-checkbox-checked')) {
      document.querySelectorAll('.popup-show-filtered').forEach((item) => {
        item.style.display = 'none';
      });
      wrapper.querySelector('.popup-show-filtered').style.display = 'block';
    } else {
      wrapper.querySelector('.popup-show-filtered').style.display = 'none';
    }
  }
  return (
    <Container>
      <FilterName>{filterName}</FilterName>
      <Wrapper>
        <StyledCheckbox onClick={onClick}>{filterOption}</StyledCheckbox>
        <Popup className="popup-show-filtered">Знайдено: {quantityOfProducts}
          <Link>Показати</Link>
        </Popup>
      </Wrapper>
    </Container>
  );
};