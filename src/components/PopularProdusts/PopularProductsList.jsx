import React from "react";
import { ProductItem } from "../ProductItem/ProductItem";


import {Title} from "../Title/Title";

import './popularProductList.scss'

export const PopularProductsList = () => {
    return (
        <>
            <Title text={'Популярные товары'}/>
            <div className={'popular-product-list'}>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            </div>
        </>
    )
}