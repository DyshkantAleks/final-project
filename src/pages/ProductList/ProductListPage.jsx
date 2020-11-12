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
  const allProducts = useSelector(selectProducts);

  let array = [];
  let uniqueFilteredColors;


  if (currentItemByRoute) {
    const isRootCategory = currentItemByRoute.parentId === 'null'
    console.log('isRootCategory', isRootCategory)
    array = allProducts.filter(e => isRootCategory
      ? e.category === currentItemByRoute.category
      : e.subCategory === currentItemByRoute.category
    );
    const filterColors = array.map(item => item.color);
    uniqueFilteredColors = [...new Set(filterColors)];
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
