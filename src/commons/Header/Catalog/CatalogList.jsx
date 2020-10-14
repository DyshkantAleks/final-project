import React from "react";
import styled from "styled-components";

import {CatalogItem} from "./CatalogItem";
import {device} from "../../../styles/breakpoints/breakpoints";

export const CatalogList = () => {
    return (
            <Container>
                <List>
                    <CatalogItem/>
                </List>
            </Container>

    )
};
const Container = styled.div`
width: 100%;
background-color: #f2f2f2;
`;
const List = styled.ul`
list-style: none;
    padding-left: 0;
    margin: 0;
    width: 100%;
    
    @media ${device.desktop}{
    display: flex;
    width: fit-content;
    margin: 0 auto;
    padding: 1rem 0;
    }
`;

