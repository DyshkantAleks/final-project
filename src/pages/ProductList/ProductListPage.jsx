import React from 'react'
import { useSelector } from 'react-redux'
import { Header } from '../../commons/Header/Header'
import { selectProducts } from '../../store/products_draft/selectors'
import { selectCategoryFromRoute } from '../../store/categories/selectors'
import { ProductItem } from '../../components/ProductItem'
import { ContentContairer } from '../../components/Content/Content';
import { ProductItemList } from '../Product/StyledProductPage';
import { Footer } from '../../commons/Footer';

export const ProductListPage = ({ match, location }) => {
  const { params: { route } } = match

  const currentItemByRoute = useSelector(selectCategoryFromRoute(route))

  const allProducts = useSelector(selectProducts);
  let array = [];
  if (currentItemByRoute) {
    const isRootCategory = currentItemByRoute.parentId === 'null';
    array = allProducts.filter(e => isRootCategory
      ? e.category === currentItemByRoute.category
      : e.subCategory === currentItemByRoute.category
    );
  };

  return (

    <>
      <Header />
      <ContentContairer>
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
              isSale={e.isSale}
              previousPrice={e.previousPrice}
              product={e}
            />
          ))}
        </ProductItemList>
      </ContentContairer>
      <Footer />

    </>

  )
}
