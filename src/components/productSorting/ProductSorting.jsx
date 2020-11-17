import React from 'react';

import { StyledSelect } from './StyledProductSorting';

export const ProductSorting = ({ onChangeHandler }) => {
  const { Option } = StyledSelect;
  return (
    <StyledSelect defaultValue="По рейтингу" onChange={onChangeHandler}>
      <Option value="По рейтингу">По рейтингу</Option>
      <Option value="От дешевых к дорогим">От дешевых к дорогим</Option>
      <Option value="От дорогих к дешевым">От дорогих к дешевым</Option>
      <Option value="Популярные">Популярные</Option>
      <Option value="Новинки">Новинки</Option>
      <Option value="Акционные">Акционные</Option>
    </StyledSelect>
  );
}