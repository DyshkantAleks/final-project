import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {Content, Wrapper, Title, FilterName, StyledCheckboxGroupe, ProductList} from './StyledProductListPage';
import { Header } from '../../commons/Header/Header';
import { selectProducts } from '../../store/products/selectors';
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

  const [sortValue, setSortValue] = useState('Сортировать');


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
      <Header/>
      <ScrollToTop/>
      <ContentContainer>
        <Content>
          <Wrapper>
            <Title>Название</Title>
            <RangeSlider
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
};