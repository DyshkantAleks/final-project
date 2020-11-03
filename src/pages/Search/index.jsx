import React from 'react'
import { Header } from '../../commons/Header/Header'
import { Footer } from '../../commons/Footer'
import { Title } from '../../components/Title/Title'
import { useSelector } from 'react-redux'
import { selectProducts } from '../../store/products_draft/selectors'
import { ProductItem } from '../../components/ProductItem'
import { ProductItemList } from '../Product/StyledProductPage'
import { ContentContairer } from '../../components/Content/Content'

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
      <Title text='Результаты поиска по запросу'>{parsed.query}</Title>
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
      <Footer />
    </>
  )
}
