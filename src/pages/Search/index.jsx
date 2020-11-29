import React from 'react';
import { useSelector } from 'react-redux';

import { selectProducts } from '../../store/products/selectors';
import { ProductItem } from '../../components/ProductItem';
import { ProductItemList } from '../../components/ProductItemDetails/StyledProductItemDetails';
import { ContentContainer } from '../../styles/GeneralStyledComponents';
import { StyledTitle } from './StyledSearch';

export const SearchPage = ({ match, location }) => {
  const allProducts = useSelector(selectProducts);
  const queryString = require('query-string');
  const parsed = queryString.parse(location.search);
  const searchArray = allProducts.filter(e => e.name.toLowerCase().includes(parsed.query.toLowerCase()));
  const searchArrayForRender = searchArray.map((e, index) => (
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
  ));
  return (
    <ContentContainer>
      {searchArray.length > 0 && (
        <h2>Результат поиска по запросу "{parsed.query}"</h2>
      )}
      {searchArray.length < 1 && (
        <StyledTitle>По запросу "{parsed.query}" ничего не найдено</StyledTitle>
      )}
      <ProductItemList>
        {searchArrayForRender}
      </ProductItemList>
    </ContentContainer>
  )
};