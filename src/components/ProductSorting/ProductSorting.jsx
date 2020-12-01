import React from 'react';

import { StyledSelect } from './StyledProductSorting';

export const ProductSorting = ({ onChangeHandler, value }) => {
  const { Option } = StyledSelect;
  return (
    <StyledSelect onChange={onChangeHandler} value={value}>
      <Option value="priceAscending">От дешевых к дорогим</Option>
      <Option value="priceDescending">От дорогих к дешевым</Option>
      <Option value="isTopRated">Популярные</Option>
      <Option value="isNewProduct">Новинки</Option>
      <Option value="isSale">Акционные</Option>
    </StyledSelect>
  );
}