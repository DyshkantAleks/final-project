import React from "react";
import {PopularCategoryList} from "../PopularCategory/PopularCategoryList";
import {PopularProductsList} from "../PopularProdusts/PopularProductsList";
import {ProductItem} from "../ProductItem/ProductItem";
import './Wrapper.scss'


export const Wrapper = () => {
    return (
        <div className={'wrapper'}>
            <PopularProductsList/>
            <ProductItem/>
            <PopularCategoryList/>
        </div>

    )
}