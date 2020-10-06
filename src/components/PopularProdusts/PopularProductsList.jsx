import React from "react";
import {Title} from "../Title/Title";

import './popularProductList.scss'

export const PopularProductsList = () => {
    return (
        <>
            <Title text={'Популярные товары'}/>
            <div className={'popular-product-list'}></div>
        </>
    )
}