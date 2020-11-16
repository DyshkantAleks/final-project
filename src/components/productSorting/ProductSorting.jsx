import React from 'react';

import { StyledSelect } from './StyledProductSorting';

<<<<<<< HEAD
export const ProductSorting = ({ onChangeHandler, value }) => {
  const { Option } = StyledSelect;
  return (
    <StyledSelect onChange={onChangeHandler} value={value}>
      
      {/* <Option value="По рейтингу">По рейтингу</Option> */}
      <Option value="priceAscending">От дешевых к дорогим</Option>
      <Option value="priceDescending">От дорогих к дешевым</Option>
      <Option value="isTopRated">Популярные</Option>
      <Option value="isNewProduct">Новинки</Option>
      <Option value="isSale">Акционные</Option>
=======
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
>>>>>>> 088fcbfc5cf8fddf78d10cfa0c3b40e72aa81d9f
    </StyledSelect>
  );
}