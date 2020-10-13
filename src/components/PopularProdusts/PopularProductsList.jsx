import React from "react";
import styled from "styled-components";
import {Title} from "../Title/Title";


import {device} from "../../styles/breakpoints/breakpoints";

export const PopularProductsList = () => {
    return (
        <>
            <Title text={'Популярные товары'}/>
            <List></List>
        </>
    )
}

const List = styled.div`
display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem 2rem;
    
    @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    }

`