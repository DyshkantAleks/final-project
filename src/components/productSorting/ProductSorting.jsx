import React from 'react';

import { StyledSelect } from './StyledProductSorting';

export const ProductSorting = ({ onChangeHandler }) => {
  const { Option } = StyledSelect;
  return (
    <StyledSelect defaultValue="Сортировать" onChange={onChangeHandler}>
      {/* <Option value="По рейтингу">По рейтингу</Option> */}
      <Option value="priceAscending">От дешевых к дорогим</Option>
      <Option value="priceDescending">От дорогих к дешевым</Option>
      <Option value="isTopRated">Популярные</Option>
      <Option value="isNewProduct">Новинки</Option>
      <Option value="isSale">Акционные</Option>
    </StyledSelect>
  );
}