import React from "react";
import styled from "styled-components";


import {PopularCategoryItem} from "./PopularCategoryItem";

import {Title} from "../Title/Title";
import {device} from "../../styles/breakpoints/breakpoints";

export const PopularCategoryList = () => {
    return (
        <>
            <Title text={'Популярные категории'}/>
            <List>
                <PopularCategoryItem textForTitle={'Tables'}
                                     textForSubtitle={'Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle'}/>
                <PopularCategoryItem textForTitle={'Tables'}
                                     textForSubtitle={'Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle'}/>
                <PopularCategoryItem textForTitle={'Tables'}
                                     textForSubtitle={'Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle'}/>
                <PopularCategoryItem textForTitle={'Tables'}
                                     textForSubtitle={'Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle'}/>
            </List>
        </>

    )

}

const List = styled.div`
     display: grid;
    grid-template-columns: 1fr;
    gap: 2rem 2rem;
    
    
    
@media ${device.tablet} {
 grid-template-columns: 1fr 1fr;
}

@media ${device.desktop} {
 min-height: 250px;
}   
`;