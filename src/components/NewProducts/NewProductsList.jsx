import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Title} from '../Title/Title';

import {device} from '../../styles/breakpoints/breakpoints';
import {ProductItemList} from "../ProductItemDetails/StyledProductItemDetails";
import {useDispatch, useSelector} from "react-redux";
import {selectProductsForFilter} from "../../store/products_draft/selectors";

import {getProductsByIsNew, getProductsByIsPopular} from "../../store/products_draft/middlware";

import ProductItem from "../ProductItem";


export const NewProductsList = () => {
  const dispatch = useDispatch();
  const selectByIsNew = useSelector(selectProductsForFilter);

  useEffect(() => {
    dispatch(getProductsByIsNew());
  }, []);

  console.log(selectByIsNew.products);

  return (
    <>
      <Title text={'Новые товары'}/>
      <ProductItemList>
        {
          selectByIsNew.products.map((e) => (
             <ProductItem name={e.name} price={e.currentPrice} image={e.imageUrl[0]} key={e.id} route={e.route} id={e._id}/>
          ))
        }
      </ProductItemList>
    </>
  )
}

export const List = styled.ul`
display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem 2rem;
    list-style: none;
    padding-left: 0;
    
    @media ${device.tabletM} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    }

`