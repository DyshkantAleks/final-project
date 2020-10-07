import React from "react";
import {PopularCategoryItem} from "./PopularCategoryItem";
import './popularCategory.scss'
import {Title} from "../Title/Title";

export const PopularCategoryList = () => {
    return (
        <>
            <Title text={'Популярные категории'}/>
            <div className={'popular-category__list'}></div>
        </>

    )
}