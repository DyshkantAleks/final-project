<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {Content, Wrapper, Title, FilterName, StyledCheckboxGroupe, ProductList} from './StyledProductListPage';
import { Header } from '../../commons/Header/Header';
import { selectProducts } from '../../store/products_draft/selectors';
import { selectCategoryFromRoute } from '../../store/categories/selectors';
import { ProductItem } from '../../components/ProductItem';
import { ContentContainer } from '../../styles/GeneralStyledComponents';
import { Footer } from '../../commons/Footer';
import { CheckboxFilter } from '../../components/CheckBox/CheckboxFilter';
import { RangeSlider } from '../../components/rangeSlider/RangeSlider';
import { ProductSorting } from '../../components/productSorting/ProductSorting'
import { categoriesFilter } from '../../utils/filters';
import { StyledCheckbox } from '../../components/CheckBox/StyledCheckboxFilter';
import './style.scss';
import { ScrollToTop } from '../../components/ScrollToTop';

export const ProductListPage = ({ match }) => {
  const [checkedColors, setCheckedColors] = useState([]);
  const [checkedBrands, setCheckedBrands] = useState([]);
  const [priceValues, setPriceValues] = useState([]);
=======
import React, { useState, useRef } from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux'
import { Header } from '../../commons/Header/Header'
import { selectProducts } from '../../store/products_draft/selectors'
import { selectCategoryFromRoute } from '../../store/categories/selectors'
import { ProductItem } from '../../components/ProductItem'
import { ContentContairer } from '../../components/Content/Content'
import { ProductItemList } from '../Product/StyledProductPage'
import { Footer } from '../../commons/Footer'
import { CheckboxFilter } from '../../components/CheckBox/CheckboxFilter'
import { RangeSlider } from '../../components/rangeSlider/RangeSlider'
import { ProductSorting } from '../../components/productSorting/ProductSorting'

export const ProductListPage = ({ match, location }) => {
  const { params: { route } } = match;

  const currentItemByRoute = useSelector(selectCategoryFromRoute(route));
>>>>>>> 088fcbfc5cf8fddf78d10cfa0c3b40e72aa81d9f

  const [sortValue, setSortValue] = useState('Сортировать');


  const { params: { route } } = match;
  
  const currentItemByRoute = useSelector(selectCategoryFromRoute(route));
  const allProducts = useSelector(selectProducts);
<<<<<<< HEAD
=======

  let array = [];
  if (currentItemByRoute) {
    const isRootCategory = currentItemByRoute.parentId === 'null'
    array = allProducts.filter(e => isRootCategory
      ? e.category === currentItemByRoute.category
      : e.subCategory === currentItemByRoute.category
    );
  }

  array.sort((a, b) => a.isTopRated === b.isTopRated ? 0 : a.isTopRated ? -1 : 1);

  const [selectedColors, setSelectedColors] = useState([]);
  const colors = ['Белый', 'Бежевый', 'Оранжевый', 'Коричневый', 'Металлик', 'Черный'];


  function onClickHandlerColor(e) {
    const wrapper = e.target.closest('div');
    const color = wrapper.querySelector('.ant-checkbox + span').innerText;

    if (!wrapper.querySelector('.ant-checkbox-checked')) {
      setSelectedColors(prev => [...prev, color]);
      array.filter(item => selectedColors.includes(item.color));
    } else {
      setSelectedColors(prev => prev.filter(item => item !== color));
    }
  }

  function onAfterChangeHandler(value) {
    array.filter(item => item.currentPrice <= value)
  }

  function onChangeHandler(value) {
    switch (value) {
      case "По рейтингу":
        array.sort((a, b) => a.isTopRated === b.isTopRated ? 0 : a.isTopRated ? -1 : 1);
        break;
      case "От дешевых к дорогим":
        array.sort((a, b) => a.currentPrice < b.currentPrice ? -1 : 1);
        break;
      case "От дорогих к дешевым":
        array.sort((a, b) => a.currentPrice > b.currentPrice ? -1 : 1);
        break;
      case "Новинки":
        array.sort((a, b) => a.isNewProduct === b.isNewProduct ? 0 : a.isNewProduct ? -1 : 1);
        break;
      case "Акционные":
        array.sort((a, b) => a.isSale === b.isSale ? 0 : a.isSale ? -1 : 1);
        break;
      default:
        array.sort((a, b) => a.isTopRated === b.isTopRated ? 0 : a.isTopRated ? -1 : 1);
    }
  }
>>>>>>> 088fcbfc5cf8fddf78d10cfa0c3b40e72aa81d9f

  const productsByCategorie = categoriesFilter(allProducts, currentItemByRoute);
   
  const arrayOfColors = new Set(productsByCategorie.map(item => item.color));
  const arrayOfBrands = new Set(productsByCategorie.map(item => item.brand));

  useEffect(() => {
    setCheckedColors([]);
    setCheckedBrands([]);
    setPriceValues([]);
    setSortValue('Сортировать');
  }, [route]);
  
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
    <>
<<<<<<< HEAD
      <Header/>
      <ScrollToTop/>
      <ContentContainer>
=======
      <Header />
      <ContentContairer>
>>>>>>> 088fcbfc5cf8fddf78d10cfa0c3b40e72aa81d9f
        <Content>
          <Wrapper>
            <Title>Название</Title>
            <RangeSlider
<<<<<<< HEAD
              price='Цена'
              currency='грн'
              min={0}
              max={200000}
              step={100}

              defaultValue={[1000, 160000]}
              onAfterChangeHandler={onAfterChangeHandler}
            />

            <StyledCheckboxGroupe onChange={onChackedColorHandler} value={checkedColors}>

              <FilterName>Цвет</FilterName>
              {[...arrayOfColors].map((item, index) =>
                <StyledCheckbox key={index} value={item}>{ item }</StyledCheckbox>
              )}
            </StyledCheckboxGroupe>

            <StyledCheckboxGroupe onChange={onCheckedBrandHandler} value={checkedBrands}>

              <FilterName>Бренд</FilterName>
              {[...arrayOfBrands].map((item, index) =>
                <StyledCheckbox key={index} value={item}>{ item }</StyledCheckbox>
              )}
            </StyledCheckboxGroupe>
=======
              price="Цена"
              currency="грн"
              min={0}
              max={200000}
              step={1}
              defaultValue={50000}
              onAfterChangeHandler={onAfterChangeHandler}
            />
            <FilterName>Цвет</FilterName>
            {colors.map((item, index) => (
              <CheckboxFilter
                key={index}
                onClickHandler={onClickHandlerColor}
                filterOption={item}
              />)
            )}
          </Wrapper>
          <Wrapper>
            <ProductSorting onChangeHandler={onChangeHandler} />
            <ProductItemList>
              {array.map((e, index) => (
                <ProductItem
                  key={index}
                  name={e.name}
                  price={e.currentPrice}
                  image={e.imageUrl[0]}
                  route={e.route}
                  id={e._id}
                  isNewProduct={e.isNewProduct}
                  isTopRated={e.isTopRated}
                />
              ))}
            </ProductItemList>
          </Wrapper>
        </Content>
      </ContentContairer>
      <Footer />
    </>
>>>>>>> 088fcbfc5cf8fddf78d10cfa0c3b40e72aa81d9f

          </Wrapper>
          <Wrapper>

            <ProductSorting onChangeHandler={onSelectChangeHandler} value={sortValue}/>
            <ProductList>
              {result.map((e, index) => (

                <ProductItem
                  key={index}
                  name={e.name}
                  price={e.currentPrice}
                  previousPrice={e.previousPrice}
                  image={e.imageUrl[0]}
                  route={e.route}
                  id={e._id}
                  isNewProduct={e.isNewProduct}
                  isTopRated={e.isTopRated}
                  isSale={e.isSale}
                  product={e}
                />
              ))}
            </ProductList>
          </Wrapper>
        </Content>
      </ContentContainer>
      <Footer />
    </>
  )
<<<<<<< HEAD
};
=======
}

const Content = styled.main`
  display: flex;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  margin: 10px;
  min-width: 250px;
`;

const Title = styled.h1`
  font-size: 30px;
`;

const FilterName = styled.h3`
  font-size: 24px;
  text-align: left;
`;
>>>>>>> 088fcbfc5cf8fddf78d10cfa0c3b40e72aa81d9f
