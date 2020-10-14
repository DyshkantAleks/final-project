import React from "react";
import styled from "styled-components";
import {Title} from "../Title/Title";



import {device} from "../../styles/breakpoints/breakpoints";
import {ProductItem} from "../ProductItem/ProductItem";

export const PopularProductsList = () => {
    return (
        <>
            <Title text={'Популярные товары'}/>
            <List>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </List>
        </>
    )
}

export const List = styled.ul`
display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem 2rem;
    list-style: none;
    padding-left: 0;
    
    @media ${device.tabletM} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    }

`