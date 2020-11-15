import React from 'react'
import { Header } from '../../commons/Header/Header'
import { Footer } from '../../commons/Footer'
import { useSelector } from 'react-redux'
import { selectProducts } from '../../store/AppData/products_draft/selectors'
import { ProductItem } from '../../components/ProductItem'
import { ProductItemList } from '../Product/StyledProductPage'
import { ContentContainer } from '../../styles/GeneralStyledComponents';

export const SearchPage = ({ match, location }) => {
  const allProducts = useSelector(selectProducts)
  console.log(allProducts)
  const queryString = require('query-string')
  const parsed = queryString.parse(location.search)
  console.log(parsed.query)
  const searchArray = allProducts.filter(e => e.name.toLowerCase().includes(parsed.query.toLowerCase()))
  console.log(searchArray)
  return (
    <>
      <Header />
      <ContentContainer>
        {searchArray.length > 0 && (
          <h2>Результат поиска по запросу "{parsed.query}"</h2>
        )}
        {searchArray.length < 1 && (
          <h1>По запросу "{parsed.query}" ничего не найдено</h1>
        )}
        <ProductItemList>
          {searchArray.map((e, index) => (
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
      </ContentContainer>
      <Footer />
    </>
  )
}
