import React, {useEffect} from "react";
import {Header} from "../../commons/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {getProductsByCategory, getProductsBySubCategory} from "../../store/products_draft/middlware";
import {selectProducts, selectProductsForFilter} from "../../store/products_draft/selectors";
import {selectCategoryFromRoute} from "../../store/categories/selectors";

import {ProductItem} from "../../components/ProductItem/ProductItem";
import {Link} from "react-router-dom";

export const ProductListPage = ({match, location}) => {
  const {params: {route}} = match;
  //console.log(route)

  const currentItemByRoute = useSelector(selectCategoryFromRoute(route));
  //console.log(currentItemByRoute);

  const productsByCategory = useSelector(selectProductsForFilter);
  const dispatch = useDispatch();


  useEffect(() => {
    if (!!currentItemByRoute) {
      console.log(currentItemByRoute.category);
      if (currentItemByRoute.parentId === 'null') {

        dispatch(getProductsByCategory(currentItemByRoute.category));
      } else {
        dispatch(getProductsBySubCategory(currentItemByRoute.category));
      }
    }
  }, [currentItemByRoute]);

  console.log(productsByCategory.products);


  return (
    <>
      <Header/>
      <h1>Title of page</h1>
      {productsByCategory.products.map((e) => (
          <ProductItem name={e.name} price={e.currentPrice} image={e.imageUrl[0]} key={e.id}/>
      ))}
    </>
  )
}