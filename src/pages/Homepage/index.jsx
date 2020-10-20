import React, {useEffect} from "react";
import {Header} from "../../commons/Header/Header";
import {ContentContairer} from "../../components/Content/Content";
import {PopularProductsList} from "../../components/PopularProdusts/PopularProductsList";
import {PopularCategoryList} from "../../components/PopularCategory/PopularCategoryList";
import {SliderTest} from "../../components/SliderMain/SliderMain";
import {useDispatch} from "react-redux";
import {getPromotionsList} from "../../store/promotions/actions";

export const Homepage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getPromotionsList()(dispatch)
    }, [])
    return (
        <>
            <Header/>
            <ContentContairer>
                <h1>Home page</h1>
                <SliderTest/>
                <PopularProductsList/>
                <PopularCategoryList/>
            </ContentContairer>
        </>
    )
}