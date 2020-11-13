import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import {Content, Wrapper, Title, FilterName, StyledCheckboxGroupe, ProductList} from './StyledProductListPage';
import { Header } from '../../commons/Header/Header';
import { selectProducts } from '../../store/products/selectors';
import { selectCategoryFromRoute } from '../../store/categories/selectors';
import { ProductItem } from '../../components/ProductItem';
import { ContentContairer } from '../../components/Content/Content';
import { Footer } from '../../commons/Footer';
// import { CheckboxFilter } from '../../components/CheckBox/CheckboxFilter';
import { RangeSlider } from '../../components/rangeSlider/RangeSlider';
import { ProductSorting } from '../../components/productSorting/ProductSorting'
import { categoriesFilter } from '../../utils/filters';
import { StyledCheckbox } from '../../components/CheckBox/StyledCheckboxFilter';
import './style.scss';
import { ScrollToTop } from '../../components/ScrollToTop';

export const ProductListPage = ({ match }) => {
  const [checkedVal, setCheckedVal] = useState([])
  const { params: { route } } = match;

  const currentItemByRoute = useSelector(selectCategoryFromRoute(route));
  const allProducts = useSelector(selectProducts);
  const array = categoriesFilter(allProducts, currentItemByRoute);

  const arrayOfColors = new Set(array.map(item => item.color));
  const arrayOfBrands = new Set(array.map(item => item.brand));

  const newArray = array.filter(productItem => checkedVal.some(chackedItem => chackedItem === productItem.color || chackedItem === productItem.brand))

  const onClickHandlerColor = (checkedValues) => {
    setCheckedVal(checkedValues)
  }
  let result;
  checkedVal.length > 0 ? result = newArray : result = array;

  return (
    <>
      <Header />
      <ScrollToTop />
      <ContentContairer>
        <Content>
          <Wrapper>
            <Title>Название</Title>
            <RangeSlider
              price="Цена"
              currency="грн"
              min={0}
              max={200000}
              step={1}
              defaultValue={50000}
            // onAfterChangeHandler={onAfterChangeHandler}
            />

            <StyledCheckboxGroupe onChange={onClickHandlerColor} >
              <FilterName>Цвет</FilterName>
              {[...arrayOfColors].map((item, index) => (
                <StyledCheckbox
                  key={index}
                  // onClickHandler={onClickHandlerColor}
                  // filterOption={item}
                  value={item}
                >{item}</StyledCheckbox>)
              )}

              <FilterName>Бренд</FilterName>
              {[...arrayOfBrands].map((item, index) => (
                <StyledCheckbox
                  key={index}
                  // onClickHandler={onClickHandlerColor}
                  value={item}
                >{item}</StyledCheckbox>)
              )}
            </StyledCheckboxGroupe>
          </Wrapper>
          {/* <ProductSorting onChangeHandler={onChangeHandler} /> */}
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
        </Content>
      </ContentContairer>
      <Footer />
    </>
  )
};