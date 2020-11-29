import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FilterTwoTone } from '@ant-design/icons';
import { Collapse } from 'antd';
import { slide as MobileFilter } from 'react-burger-menu';

import { Content, Wrapper, StyledChackboxName, FilterName, ProductList, FiltersWrapper, StyledPagination, StyledCheckboxGroup, StyledLabel } from './StyledProductListPage';
import { selectProducts } from '../../store/products/selectors';
import { selectCategoryFromRoute } from '../../store/categories/selectors';
import { ProductItem } from '../../components/ProductItem';
import { ContentContainer } from '../../styles/GeneralStyledComponents';
import { RangeSlider } from '../../components/RangeSlider/RangeSlider';
import { ProductSorting } from '../../components/ProductSorting/ProductSorting';
import { categoriesFilter } from '../../utils/filters';
import useWindowDimensions from '../../utils/useWindowDimensions';
import { useHistory } from 'react-router';
import CheckboxGroup from 'react-checkbox-group';

export const ProductListPage = ({ match }) => {
  const { Panel } = Collapse;
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

  if (sortValue === 'priceAscending') {
    productsByCategorie.sort((a, b) => a.currentPrice > b.currentPrice ? 1 : -1)
  }
  if (sortValue === 'priceDescending') {
    productsByCategorie.sort((a, b) => a.currentPrice < b.currentPrice ? 1 : -1)
  }

  const result = productsByCategorie
    .filter(productItem => (checkedColors.length === 0) ? productItem : checkedColors.some(chackedItem => chackedItem === productItem.color))
    .filter(productItem => (checkedBrands.length === 0) ? productItem : checkedBrands.some(chackedItem => chackedItem === productItem.brand))
    .filter(productItem => (priceValues.length === 0) ? productItem : (priceValues[0] < productItem.currentPrice && productItem.currentPrice < priceValues[1]))
    .filter(productItem => (sortValue === 'Сортировать' || sortValue === 'priceAscending' || sortValue === 'priceDescending') ? productItem : productItem[sortValue] === true)

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
        {screenWidth >= 1200 && <Wrapper>
          <RangeSlider onAfterChangeHandler={onAfterChangeHandler} />
          {colorCheckBoxes()}
          {brandCheckBoxes()}
        </Wrapper>}

        <Wrapper>
          <FiltersWrapper>
            <ProductSorting onChangeHandler={onSelectChangeHandler} value={sortValue} />
            {screenWidth <= 1200 && <Wrapper>
              <MobileFilter disableAutoFocus customBurgerIcon={<FilterTwoTone twoToneColor="#7191a6" />}>
                <Collapse ghost>
                  <Panel header="Цена" key="1">
                    <RangeSlider onAfterChangeHandler={onAfterChangeHandler} />
                  </Panel>
                  <Panel header="Цвет" key="2">
                    {colorCheckBoxes()}
                  </Panel>
                  <Panel header="Бренд" key="3">
                    {brandCheckBoxes()}
                  </Panel>
                </Collapse>
              </MobileFilter>
            </Wrapper>}
          </FiltersWrapper>
          {filtredProducts()}
          <StyledPagination current={current} pageSize={pageSize} total={result.length} onChange={setCurrent} showSizeChanger={false} />
        </Wrapper>
      </Content>
    </ContentContainer>
  );
}
