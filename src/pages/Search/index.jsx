import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectProducts } from '../../store/products/selectors';
import { ProductItem } from '../../components/ProductItem';
import { ContentContainer } from '../../styles/GeneralStyledComponents';
import { StyledTitle } from './StyledSearch';
import { filterByCheckboxes, sortingProducts } from '../../utils/filters';
import useWindowDimensions from '../../utils/useWindowDimensions';
import { Content, FiltersWrapper, ProductList, StyledPagination, Wrapper } from '../ProductList/StyledProductListPage';
import { FilterDesktop } from '../../components/Filters/FilterDesktop';
import { FilterMobile } from '../../components/Filters/FilterMobile';
import { ProductSorting } from '../../components/ProductSorting/ProductSorting';

export const SearchPage = ({ match, location }) => {
  const { screenWidth } = useWindowDimensions();
  const pageSize = 9;
  const [current, setCurrent] = useState(1);
  const [checkedColors, setCheckedColors] = useState([]);
  const [checkedBrands, setCheckedBrands] = useState([]);
  const [priceValues, setPriceValues] = useState([]);
  const [sortValue, setSortValue] = useState('Сортировать');

  const allProducts = useSelector(selectProducts);
  const queryString = require('query-string');
  const parsed = queryString.parse(location.search);
  const searchArray = allProducts.filter(e => e.name.toLowerCase().includes(parsed.query.toLowerCase()));

  const arrayOfColors = new Set(searchArray.map(item => item.color));
  const arrayOfBrands = new Set(searchArray.map(item => item.brand));
  sortingProducts(searchArray, sortValue);
  const result = filterByCheckboxes(searchArray, checkedColors, checkedBrands, priceValues);
  const pageChange = (current, pageSize) => result.slice((current - 1) * pageSize, current * pageSize);

  const searchArrayForRender = pageChange(current, pageSize).map((e, index) => (
    <ProductItem key={index} product={e} />
  ));

  const onChackedColorHandler = (checkedValues) => {
    setCheckedColors(checkedValues)
  }
  const onCheckedBrandHandler = (checkedValues) => {
    setCheckedBrands(checkedValues)
  }
  const onAfterChangeHandler = (disabled) => {
    setPriceValues(disabled)
  }
  const onSelectChangeHandler = (checkedSelectValue) => {
    setSortValue(checkedSelectValue)
  }
 
  return (
    <ContentContainer>
      {searchArray.length < 1 && (
        <StyledTitle>По запросу "{parsed.query}" ничего не найдено</StyledTitle>
      )}
      {searchArray.length > 0 && (
        <>
          <h2>Результат поиска по запросу "{parsed.query}"</h2>
          <Content>
            {screenWidth >= 1200 && <FilterDesktop
              arrayOfColors={arrayOfColors}
              checkedColors={checkedColors}
              onChackedColorHandler={onChackedColorHandler}
              arrayOfBrands={arrayOfBrands}
              checkedBrands={checkedBrands}
              onCheckedBrandHandler={onCheckedBrandHandler}
              onAfterChangeHandler={onAfterChangeHandler}
            />}
            <Wrapper>
              <FiltersWrapper>
                <ProductSorting onChangeHandler={onSelectChangeHandler} value={sortValue} />
                {screenWidth <= 1200 && <FilterMobile
                  arrayOfColors={arrayOfColors}
                  checkedColors={checkedColors}
                  onChackedColorHandler={onChackedColorHandler}
                  arrayOfBrands={arrayOfBrands}
                  checkedBrands={checkedBrands}
                  onCheckedBrandHandler={onCheckedBrandHandler}
                  onAfterChangeHandler={onAfterChangeHandler}
                />}
              </FiltersWrapper>
              <ProductList>
                {searchArrayForRender}
              </ProductList>
              {result.length > pageSize && <StyledPagination
                current={current}
                pageSize={pageSize}
                total={result.length}
                onChange={setCurrent}
                showSizeChanger={false}
              />}
            </Wrapper>
          </Content>
        </>
      )}
    </ContentContainer>
  )
};