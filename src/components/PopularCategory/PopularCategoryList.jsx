import React from "react";
import styled from "styled-components";



import {PopularCategoryItem} from "./PopularCategoryItem";

import {Title} from "../Title/Title";
import {device} from "../../styles/breakpoints/breakpoints";

export const PopularCategoryList = ({props}) => {
    return (
        <>
            <Title text={'Популярные категории'}/>
            <List>
                <PopularCategoryItem backGround={'./img/table.png'}
                    textForTitle={'Tables'}
                                     textForSubtitle={'Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle'}/>
                <PopularCategoryItem textForTitle={'Tables'}
                                     backGround={'./img/table.png'}
                                     textForSubtitle={'Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle'}/>
                <PopularCategoryItem textForTitle={'Tables'}
                                     backGround={'./img/table.png'}
                                     textForSubtitle={'Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle'}/>
                <PopularCategoryItem textForTitle={'Tables'}
                                     backGround={'./img/table.png'}
                                     textForSubtitle={'Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle'}/>
            </List>
        </>

    )

}

const List = styled.div`
     display: grid;
    grid-template-columns: 1fr;
    gap: 2rem 2rem;
   
@media ${device.tabletM} {
 grid-template-columns: 1fr 1fr;
}

`;