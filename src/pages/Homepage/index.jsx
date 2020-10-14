import React from "react";
import {Header} from "../../commons/Header/Header";
<<<<<<< HEAD
import {ContentContairer} from "../../components/Content/Content";
=======
import {Content, ContentContairer} from "../../components/Content/Content";
>>>>>>> dev
import {PopularProductsList} from "../../components/PopularProdusts/PopularProductsList";
import {PopularCategoryList} from "../../components/PopularCategory/PopularCategoryList";
import {SliderTest} from "../../components/SliderMain/SliderMain";

export const Homepage = () => {
    return (
        <>
            <Header/>
            <ContentContairer>
<<<<<<< HEAD
=======

>>>>>>> dev
                <h1>Home page</h1>
                <SliderTest/>
                <PopularProductsList/>
                <PopularCategoryList/>
            </ContentContairer>
        </>
    )
}