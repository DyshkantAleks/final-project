import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { Content, Wrapper, ProductList, FiltersWrapper, StyledPagination} from './StyledProductListPage';
import { selectProducts } from '../../store/products/selectors';
import { selectCategoryFromRoute } from '../../store/categories/selectors';
import { ProductItem } from '../../components/ProductItem';
import { ContentContainer } from '../../styles/GeneralStyledComponents';
import { ProductSorting } from '../../components/ProductSorting/ProductSorting';
import { categoriesFilter, filterByCheckboxes, sortingProducts } from '../../utils/filters';
import useWindowDimensions from '../../utils/useWindowDimensions';
import { FilterDesktop } from '../../components/Filters/FilterDesktop';
import { FilterMobile } from '../../components/Filters/FilterMobile';

export const ProductListPage = ({ match }) => {
  const { screenWidth } = useWindowDimensions();

  const pageSize = 9;
  const [current, setCurrent] = useState(1);
  const [checkedColors, setCheckedColors] = useState([]);
  const [checkedBrands, setCheckedBrands] = useState([]);
  const [priceValues, setPriceValues] = useState([]);
  const [sortValue, setSortValue] = useState('Сортировать');

  const history = useHistory();
  const { params: { route } } = match;

  const currentItemByRoute = useSelector(selectCategoryFromRoute(route));
  const allProducts = useSelector(selectProducts);

  const productsByCategorie = categoriesFilter(allProducts, currentItemByRoute);

  const arrayOfColors = new Set(productsByCategorie.map(item => item.color));
  const arrayOfBrands = new Set(productsByCategorie.map(item => item.brand));

  useEffect(() => {
    setCheckedColors([]);
    setCheckedBrands([]);
    setPriceValues([]);
    setSortValue('Сортировать');
    setCurrent(1)
  }, [route]);

  useEffect(() => {
    setCurrent(1);
    history.push(`${route}?${checkedColors.length > 0 ? `colors=${checkedColors.join('&')};` : ''}${checkedBrands.length > 0 ? `brands=${checkedBrands.join('&')};` : ''}${priceValues.length > 0 ? `price=${priceValues.join('-')}` : ''}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedColors, checkedBrands, priceValues]);

  sortingProducts(productsByCategorie, sortValue);

  const result = filterByCheckboxes(productsByCategorie, checkedColors, checkedBrands, priceValues);

  const pageChange = (current, pageSize) => result.slice((current - 1) * pageSize, current * pageSize);

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

  const prodFilterNotFound = () => {
    return (
      <div>По данным фильтрам ничего не найдено.</div>
    )
  }

  const filtredProducts = () => {
    return (
      <ProductList>
        {result.length === 0 ? prodFilterNotFound() : pageChange(current, pageSize).map((e, index) => (
          <ProductItem key={index} product={e} />
        ))}
      </ProductList>
    )
  }

  return (
    <ContentContainer>
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
          {filtredProducts()}
          {result.length > pageSize && <StyledPagination
            current={current}
            pageSize={pageSize}
            total={result.length}
            onChange={setCurrent}
            showSizeChanger={false}
          />}
        </Wrapper>
      </Content>
    </ContentContainer>
  );
}
