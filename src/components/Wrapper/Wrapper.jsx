import React from "react";

import {PopularCategoryList} from "../PopularCategory/PopularCategoryList";
import {PopularProductsList} from "../PopularProdusts/PopularProductsList";
import { ProductContainer } from "../ProductСontainer/ProductContainer";
import './Wrapper.scss'


export const Wrapper = () => {
    return (
        <div className={'wrapper'}>
            {/* <PopularProductsList/>
            <PopularCategoryList/> */}
            <ProductContainer/>
        </div>

    )
}