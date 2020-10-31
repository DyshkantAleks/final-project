import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Title} from '../Title/Title';

import {device} from '../../styles/breakpoints/breakpoints';
//import {ProductItemList} from "../ProductItemDetails/StyledProductItemDetails";
import {useDispatch, useSelector} from "react-redux";
import {selectProductsForFilter} from "../../store/products_draft/selectors";

import {getProductsByIsPopular} from "../../store/products_draft/middlware";

import {ProductItem} from "../ProductItem";
import {ProductItemList} from "../../pages/Product/StyledProductPage";


export const TopRatedProductsList = () => {
  const dispatch = useDispatch()
  const selectByIsPopular = useSelector(selectProductsForFilter)

  useEffect(() => {
    dispatch(getProductsByIsPopular());
  }, []);

  console.log(selectByIsPopular.products);

  return (
    <>
      <Title text={'Популярные товары'}/>
      <ProductItemList>
        {
           selectByIsPopular.products.map((e) => (
             <ProductItem name={e.name} price={e.currentPrice} image={e.imageUrl[0]} key={e.id} route={e.route} id={e._id}/>
          ))
        }
      </ProductItemList>
    </>
  )
}

