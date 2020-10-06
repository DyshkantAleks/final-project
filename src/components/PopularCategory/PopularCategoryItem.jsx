import React from "react";
import './popularCategory.scss'


export const PopularCategoryItem = (props) => {
    const {textForTitle, textForSubtitle} = props;

    return (
        <section className={'popular-category'}>
            <h3 className={'popular-category__title'}>{textForTitle}</h3>
            <h4 className={'popular-category__subtitle'}>{textForSubtitle}</h4>
        </section>

    )
};