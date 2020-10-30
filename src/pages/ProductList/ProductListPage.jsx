import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Header} from '../../commons/Header/Header';
import {selectProducts} from '../../store/products_draft/selectors';
import {selectCategoryFromRoute} from '../../store/categories/selectors';
import {ProductItem} from '../../components/ProductItem'
import {ContentContairer} from '../../components/Content/Content';
import {ProductItemList} from '../Product/StyledProductPage';
import {Footer} from "../../commons/Footer";
import {getProducts} from "../../store/products_draft/middlware";


export const ProductListPage = ({match, location}) => {
  const {params: {route}} = match;

  const currentItemByRoute = useSelector(selectCategoryFromRoute(route));

  const allProducts = useSelector(selectProducts);


  let array = [];
  if (currentItemByRoute) {
    const isRootCategory = currentItemByRoute.parentId === "null";
    array = allProducts.filter(e => isRootCategory ?
      e.category === currentItemByRoute.category :
      e.subCategory === currentItemByRoute.category
    );
  }


  return (

    <>
      <Header/>
      <ContentContairer>
        <h1>Title of page</h1>
        <ProductItemList>
          {array.map((e) => (
            <ProductItem
              key={e.id}
              name={e.name}
              price={e.currentPrice}
              image={e.imageUrl[0]}
              key={e.id}
              route={e.route}
              id={e._id}
              isNewProduct={e.isNewProduct}
              isTopRated={e.isTopRated}/>
          ))}
        </ProductItemList>
      </ContentContairer>
      <Footer/>

    </>

  )
}