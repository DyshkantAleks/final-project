import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Header } from '../../commons/Header/Header';
import { selectProducts } from '../../store/products_draft/selectors';
import { selectCategoryFromRoute } from '../../store/categories/selectors';
import { ProductItem } from '../../components/ProductItem';
import { ContentContairer } from '../../components/Content/Content';
import { ProductItemList } from '../Product/StyledProductPage';
import { Footer } from '../../commons/Footer';
// import { CheckboxFilter } from '../../components/CheckBox/CheckboxFilter';
import { RangeSlider } from '../../components/rangeSlider/RangeSlider';
// import { ProductSorting } from '../../components/productSorting/ProductSorting'
import { categoriesFilter } from '../../utils/filters';
import { Checkbox } from 'antd';
import { StyledCheckbox } from '../../components/CheckBox/StyledCheckboxFilter';
import './style.scss';

export const ProductListPage = ({ match, location }) => {
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

            <StyledChCheckboxGroupe onChange={onClickHandlerColor} >
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
            </StyledChCheckboxGroupe>
          </Wrapper>
          <Wrapper>
            {/* <ProductSorting onChangeHandler={onChangeHandler} /> */}
            <ProductItemList>
              {result.map((e, index) => (
                <ProductItem
                  key={index}
                  name={e.name}
                  price={e.currentPrice}
                  image={e.imageUrl[0]}
                  route={e.route}
                  id={e._id}
                  isNewProduct={e.isNewProduct}
                  isTopRated={e.isTopRated}
                  product={e}
                />
              ))}
            </ProductItemList>
          </Wrapper>
        </Content>
      </ContentContairer>
      <Footer />
    </>

  )
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

export const StyledChCheckboxGroupe = styled(Checkbox.Group)`
display: flex;
flex-direction: column;
justify-content: center;
`;